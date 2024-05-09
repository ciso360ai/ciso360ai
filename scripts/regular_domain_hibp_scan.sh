#!/bin/bash

#regular_domain_hibp_scan
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
INSERT INTO timetable.chain 
    (chain_name, run_at, max_instances, timeout, live, self_destruct, exclusive_execution, client_name)
    VALUES 
    ('regular_domain_hibp_scan','0 0 * * 1', 1, 0, true, false, false, 'scan_email');

INSERT INTO timetable.task (chain_id, kind, command, task_name, task_order)
VALUES (
(SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_hibp_scan'),
'PROGRAM'::timetable.command_kind,
'scan_domain_hibp',
'scan all domains',
COALESCE(10 + (SELECT max(task_order) FROM timetable.task WHERE chain_id = (
        SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_domain_hibp_scan') ), 10)
);    
EOF"

#initial DOMAIN HIBP scan and regular schedule on UPDATE
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
        RETURN NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        IF NEW.status != OLD.status THEN
            IF NEW.status = 'active' THEN
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
                RETURN NEW;
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
