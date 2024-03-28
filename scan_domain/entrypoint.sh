#!/bin/bash -e

echo "Starting Domain Scanner ..."

pg_timetable postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DB -c=$HOSTNAME --log-file=/logs/$HOSTNAME.log "$@"
