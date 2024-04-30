#!/bin/bash

#Alter emails table to cascade the domain delete
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
ALTER TABLE emails
    DROP CONSTRAINT emails_domain_id_foreign,
    ADD CONSTRAINT emails_domain_id_foreign FOREIGN KEY (domain_id)
    REFERENCES domains(id) ON DELETE CASCADE;
EOF"

#regular_domain_hibp_scan
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
INSERT INTO timetable.chain 
    (chain_name, run_at, max_instances, timeout, live, self_destruct, exclusive_execution, client_name)
    VALUES 
    ('regular_domain_hibp_scan','0 0 * * 1', 1, 0, true, false, false, 'scan_email');
EOF"

#initial DOMAIN HIBP scan and regular schedule on INSERT and UPDATE
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
CREATE FUNCTION regular_domain_hibp_scan() RETURNS trigger
    LANGUAGE plpgsql
    AS \\$\\$
DECLARE
    v_task_id bigint;
BEGIN
    IF (TG_OP = 'INSERT') THEN
        PERFORM timetable.add_job(
                        job_name            => 'init domain HIBP scan ' || NEW.domain,
                        job_schedule        => '* * * * *',
                        job_command         => 'scan_domain_hibp',
                        job_parameters      => jsonb_build_array(NEW.domain),
                        job_kind            => 'PROGRAM'::timetable.command_kind,
                        job_client_name     => 'scan_email',
                        job_max_instances   => 1,
                        job_live            => TRUE,
                        job_self_destruct   => TRUE,
                        job_ignore_errors   => TRUE
                    );
        IF NEW.status = 'active' THEN
            INSERT INTO timetable.task (chain_id, kind, command, task_name, task_order)
                VALUES (
                    (SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_hibp_scan'),
                    'PROGRAM'::timetable.command_kind,
                    'scan_domain_hibp',
                    NEW.domain,
                    COALESCE(10 + (SELECT max(task_order) FROM timetable.task WHERE chain_id = (
                            SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_hibp_scan') ), 10)
                    )
            RETURNING task_id INTO v_task_id;
            INSERT INTO timetable.parameter (task_id, order_id, value)
                VALUES (v_task_id, 1, jsonb_build_array(NEW.domain));
        END IF;
        RETURN NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        IF NEW.status != OLD.status THEN
            IF NEW.status = 'active' THEN
                INSERT INTO timetable.task (chain_id, kind, command, task_name, task_order)
                    VALUES (
                        (SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_hibp_scan'),
                        'PROGRAM'::timetable.command_kind,
                        'scan_domain_hibp',
                        NEW.domain,
                        COALESCE(10 + (SELECT max(task_order) FROM timetable.task WHERE chain_id = (
                                SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_hibp_scan') ), 10)
                        )
                RETURNING task_id INTO v_task_id;
                INSERT INTO timetable.parameter (task_id, order_id, value)
                    VALUES (v_task_id, 1, jsonb_build_array(NEW.domain));
                RETURN NEW;
            ELSIF NEW.status = 'inactive' THEN
                DELETE FROM timetable.task WHERE command = 'scan_domain_hibp' AND task_name = NEW.domain RETURNING task_id INTO v_task_id;
                DELETE FROM timetable.parameter WHERE task_id = v_task_id;
                RETURN OLD;
            END IF;
        END IF;
        RETURN NEW;
    END IF;
END
\\$\\$;

CREATE TRIGGER regular_domain_hibp_scan
AFTER INSERT OR UPDATE
ON domains
FOR EACH ROW 
WHEN (pg_trigger_depth() = 0)
EXECUTE FUNCTION regular_domain_hibp_scan();

EOF"

#Attempting to create a trigger to delete folders on domain deletion.
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
CREATE FUNCTION delete_domain_files() RETURNS trigger
    LANGUAGE plpgsql
    AS \\$\\$
DECLARE

BEGIN
    PERFORM timetable.add_job(
                    job_name            => 'Delete domain ' || OLD.domain,
                    job_schedule        => '* * * * *',
                    job_command         => 'delete_domain_files.sh ' || OLD.domain,
                    job_ignore_errors   => FALSE,
                    job_kind            => 'PROGRAM'::timetable.command_kind,
                    job_client_name     => 'scan_email',
                    job_max_instances   => 1,
                    job_live            => TRUE,
                    job_self_destruct   => TRUE,
                    );
END
\\$\\$;

CREATE TRIGGER domain_delete
AFTER DELETE
ON domains
FOR EACH ROW
WHEN (pg_trigger_depth() = 0)
EXECUTE FUNCTION delete_domain_files();

EOF"
