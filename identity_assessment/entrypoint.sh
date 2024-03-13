#!/bin/bash -e

echo "Identity Assessment Module Starting"

pg_timetable postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DB -c=$HOSTNAME --log-file=/logs/$HOSTNAME.log "$@"
