#!/bin/bash -e

echo "Welcome to ciso360ai"

python3 "/usr/local/bin/poc"

pg_timetable postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DB -c=$HOSTNAME --log-file=/logs/$HOSTNAME.log "$@"
