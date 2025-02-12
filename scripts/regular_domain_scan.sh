#!/bin/bash

#regular_domain_scan
docker exec -i scan_domain /bin/bash -c "psql \$PGTT_URL << EOF
INSERT INTO timetable.chain 
    (chain_name, run_at, max_instances, timeout, live, self_destruct, exclusive_execution, client_name)
    VALUES 
    ('regular_domain_scan','0 0 * * 7', 1, 0, true, false, false, 'scan_domain');
EOF"

#initial DOMAIN scan and regular schedule on INSERT and UPDATE
docker exec -i scan_domain /bin/bash -c "psql \$PGTT_URL << EOF
CREATE FUNCTION regular_domain_scan() RETURNS trigger
    LANGUAGE plpgsql
    AS \\$\\$
DECLARE
    v_task_id bigint;
BEGIN
    IF (TG_OP = 'INSERT') THEN
        IF NEW.status = 'active' THEN
            IF NEW.date_updated = NEW.date_created OR OLD.date_updated > NOW() - INTERVAL '300 minutes' THEN
                PERFORM timetable.add_job(
                    job_name            => 'init domain scan ' || NEW.domain,
                    job_schedule        => '* * * * *',
                    job_command         => 'scan_domain',
                    job_parameters      => jsonb_build_array(NEW.domain),
                    job_kind            => 'PROGRAM'::timetable.command_kind,
                    job_client_name     => 'scan_domain',
                    job_max_instances   => 1,
                    job_live            => TRUE,
                    job_self_destruct   => TRUE,
                    job_ignore_errors   => TRUE
                );
            END IF;

            INSERT INTO timetable.task (chain_id, kind, command, task_name, timeout, task_order)
                VALUES (
                    (SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_scan'),
                    'PROGRAM'::timetable.command_kind,
                    'scan_domain',
                    NEW.domain,
                    0,
                    COALESCE(10 + (SELECT max(task_order) FROM timetable.task WHERE chain_id = (
                            SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_scan') ), 10)
                    )
            RETURNING task_id INTO v_task_id;
            INSERT INTO timetable.parameter (task_id, order_id, value)
                VALUES (v_task_id, 1, jsonb_build_array(NEW.domain));
        END IF;
        RETURN NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        IF NEW.status != OLD.status THEN
            IF NEW.status = 'active' THEN
                INSERT INTO timetable.task (chain_id, kind, command, task_name, timeout, task_order)
                    VALUES (
                        (SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_scan'),
                        'PROGRAM'::timetable.command_kind,
                        'scan_domain',
                        NEW.domain,
                        0,
                        COALESCE(10 + (SELECT max(task_order) FROM timetable.task WHERE chain_id = (
                                SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_scan') ), 10)
                        )
                RETURNING task_id INTO v_task_id;
                INSERT INTO timetable.parameter (task_id, order_id, value)
                    VALUES (v_task_id, 1, jsonb_build_array(NEW.domain));
                RETURN NEW;
            ELSIF NEW.status = 'inactive' THEN
                DELETE FROM timetable.task WHERE command = 'scan_domain' AND task_name = NEW.domain RETURNING task_id INTO v_task_id;
                DELETE FROM timetable.parameter WHERE task_id = v_task_id;
                RETURN OLD;
            END IF;
        END IF;
        RETURN NEW;
    END IF;
END
\\$\\$;

CREATE TRIGGER regular_domain_scan
AFTER INSERT OR UPDATE
ON domains
FOR EACH ROW 
WHEN (pg_trigger_depth() = 0)
EXECUTE FUNCTION regular_domain_scan();

EOF"
