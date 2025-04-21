--- #regular_jobs

SELECT timetable.add_job(
    job_name            => 'VACUUM',
    job_schedule        => '0 0 * * *',
    job_command         => 'VACUUM',
    job_kind            => 'SQL'::timetable.command_kind,
    job_client_name     => 'scan_tls',
    job_max_instances   => 1,
    job_live            => TRUE,
    job_self_destruct   => FALSE,
    job_ignore_errors   => TRUE
) as chain_id;

SELECT timetable.add_job(
    job_name            => 'MONTHLY_LOG_CLEANUP',
    job_schedule        => '0 0 25 * *',
    job_command         => 'DELETE FROM public.directus_activity WHERE timestamp < NOW() - INTERVAL ''30 DAY''; DELETE FROM timetable.execution_log WHERE last_run < NOW() - INTERVAL ''30 DAY'';',
    job_kind            => 'SQL'::timetable.command_kind,
    job_client_name     => 'scan_tls',
    job_max_instances   => 1,
    job_live            => TRUE,
    job_self_destruct   => FALSE,
    job_ignore_errors   => TRUE
) as chain_id;

--- #Example job

--  SELECT timetable.add_job(
--      job_name            => 'test_job',
--      job_schedule        => '* * * * *',
--      job_command         => 'echo',
--      job_parameters      => '[\"CHANGE_ME_job_param\"]' :: jsonb,
--      job_kind            => 'PROGRAM'::timetable.command_kind,
--      job_client_name     => 'scan_tls',
--      job_max_instances   => 1,
--      job_live            => FALSE,
--      job_self_destruct   => FALSE,
--      job_ignore_errors   => TRUE
--  ) as chain_id;
