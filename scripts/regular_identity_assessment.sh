#!/bin/bash

docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF

'DO $$
DECLARE
        v_task_id bigint;
        v_chain_id bigint;
        v_chain_config_id bigint;
BEGIN

-- Create the base task
INSERT INTO timetable.base_task(name, kind, script, schedule_interval, client_n>
VALUES ('TEST', 'SQL', 'CREATE TABLE IF NOT EXISTS test()', '*/0.5 * * * *',>
returning task_id INTO v_task_id;

-- Create the chain
INSERT INTO timetable.task_chain (task_id, ignore_error, autonomous)
VALUES (v_task_id, true, true)
RETURNING chain_id INTO v_chain_id;

-- Create the chain execution configuration
INSERT INTO timetable.chain_execution_config  (chain_id, chain_name, live, max_>
VALUES (v_chain_id, 'Test chain', true, 1);
RETURNING chain_execution_config INTO v_chain_config_id

end $$
LANGUAGE 'plpgsql';


EOF"

