#!/bin/bash

echo "Starting Healthcheck."

#testing outside varibles
echo "${PG1_HOST}"
echo "${POSTGRES_HOST}"
#Initialising the varibles
#POSTGRES_HOST=$PG1_HOST
#POSTGRES_DB=$PG1_DB
#POSTGRES_PORT=$PG1_PORT
#POSTGRES_USER=$PG1_USER
#POSTGRES_PASSWORD=$PG1_PASS
HIBP_API_KEY=0

#Checks if the table exists in Postgres
TABLE_EXISTS=$(docker exec  postgres psql -h $POSTGRES_HOST -p $POSTGRES_PORT -d $POSTGRES_DB -U $POSTGRES_USER -t -c "SELECT to_regclass('public.domains')")
if [ -z "$TABLE_EXISTS" ]; then
	echo "The table does NOT exist"
	exit 1
else
	echo "the table exists"
fi

#Checks Postgres editing permissions
docker exec 49a2e5580d55 psql -h $POSTGRES_HOST -p 5432 -d $POSTGRES_DB -U $POSTGRES_USER -t -c "BEGIN; INSERT INTO domains (id) VALUES ('10000'); ROLLBACK;"
if [ $? -eq 0 ]; then
	echo "The permissions are working"
else
	echo "Editing permissions are NOT working"
	exit 1
fi 

RESPONSE_CODE=$(curl -s -o /dev/null -w "%{http_code}" -H "hibp-api-key $HIBP_API_KEY" https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com)
if [ "$RESPONSE_CODE" -eq 200 ] || [ "RESPONSE_CODE" -eq 404 ]; then
	echo "HaveIBeenPwned API connection works"
else
	echo "HaveIbeenPwned API connection does NOT work"
	exit 1
fi
