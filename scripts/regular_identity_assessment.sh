#!/bin/bash

docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF

SELECT timetable.add_job(
                    job_name            => 'test echo',
                    job_schedule        => '*/0.5 * * * *',
                    job_command         => 'test',
                    job_parameters      => [],
                    job_kind            => 'PROGRAM'::timetable.command_kind,
                    job_client_name     => 'identity_assessment',
                    job_max_instances   => 1,
                    job_live            => TRUE,
                    job_self_destruct   => FALSE,
                    job_ignore_errors   => TRUE
                );

EOF"
