#!/bin/bash

#regular_email_scan
docker exec -i scan_domain /bin/bash -c "psql \$PGTT_URL << EOF
INSERT INTO timetable.chain 
    (chain_name, run_at, max_instances, timeout, live, self_destruct, exclusive_execution, client_name)
    VALUES 
    ('regular_email_scan','0 0 * * 2', 1, 0, true, false, false, 'scan_email');

INSERT INTO timetable.task 
    (chain_id, kind, command, task_name, timeout, task_order)
    VALUES (
        (SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_email_scan'),
        'PROGRAM'::timetable.command_kind,
        'scan_email_hibp',
        'scan all emails',
        0,
        COALESCE(10 + (SELECT max(task_order) FROM timetable.task WHERE chain_id = (
                SELECT chain_id FROM timetable.chain WHERE chain_name = 'regular_email_scan') ), 10)
        );
EOF"

#initial EMAIL scan and regular schedule on INSERT and UPDATE

#TBD: FIX when multiple emails are imported creates storm of tasks 

# docker exec -i scan_domain /bin/bash -c "psql \$PGTT_URL << EOF
# CREATE FUNCTION regular_email_scan() RETURNS trigger
#     LANGUAGE plpgsql
#     AS \\$\\$
# DECLARE
#     v_task_id bigint;
# BEGIN
#     IF (TG_OP = 'INSERT') THEN
#         PERFORM timetable.add_job(
#                     job_name            => 'init email scan ' || NEW.email,
#                     job_schedule        => '* * * * *',
#                     job_command         => 'scan_email_hibp',
#                     job_parameters      => jsonb_build_array(NEW.email),
#                     job_kind            => 'PROGRAM'::timetable.command_kind,
#                     job_client_name     => 'scan_email',
#                     job_max_instances   => 1,
#                     job_live            => TRUE,
#                     job_self_destruct   => TRUE,
#                     job_ignore_errors   => TRUE
#                 );
#         RETURN NEW;
#     ELSIF (TG_OP = 'UPDATE') THEN
#         IF NEW.status != OLD.status THEN
#             IF NEW.status = 'active' THEN
#                 PERFORM timetable.add_job(
#                     job_name            => 'init email scan ' || NEW.email,
#                     job_schedule        => '* * * * *',
#                     job_command         => 'scan_email_hibp',
#                     job_parameters      => jsonb_build_array(NEW.email),
#                     job_kind            => 'PROGRAM'::timetable.command_kind,
#                     job_client_name     => 'scan_email',
#                     job_max_instances   => 1,
#                     job_live            => TRUE,
#                     job_self_destruct   => TRUE,
#                     job_ignore_errors   => TRUE
#                 );
#                 RETURN NEW;
#             END IF;
#         END IF;
#         RETURN NEW;
#     END IF;
# END
# \\$\\$;

# CREATE TRIGGER regular_email_scan
# AFTER INSERT OR UPDATE
# ON emails
# FOR EACH ROW 
# WHEN (pg_trigger_depth() = 0)
# EXECUTE FUNCTION regular_email_scan();

# EOF"
