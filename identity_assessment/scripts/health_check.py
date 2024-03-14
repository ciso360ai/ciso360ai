#!/usr/bin/python3

import sys
import os
import subprocess
import requests
import psycopg2
from psycopg2 import sql


# Function to run shell commands and return the output
def run_command(command):
	result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
	return result.stdout.decode('utf-8'), result.stdrr.decode('utf-8'), result.returncode

# PostgreSQL Environment variables
conn = psycopg2.connect(
   host = os.environ['POSTGRES_HOST'],
   database = os.environ['POSTGRES_DB'],
   port = os.environ['POSTGRES_PORT'],
   user = os.environ['POSTGRES_USER'],
   password = os.environ['POSTGRES_PASSWORD']
)
conn.autocommit = True
cursor = conn.cursor()

print("Starting Healthcheck...")

# Testing the variables are working correctly
print(host)
print(dbname)
print(port)
print(user)
print(password)

# Check if the table exists in Postgres
try:
	connection = psycopg2.connect(
		dbname=os.environ['PG1_DB'],
		user=os.environ['PG1_USER'],
		password=os.environ['PG1_PASSWORD'],
		host=os.environ['PG1_HOST'],
		port=os.environ['PG1_PORT']
	)
	cursor = connection.cursor()
	# Execute the SQL query
	cursor.execute("SELECT to_regclass('public.domains')")
	#Fetch the result
	table_exists = cursor.fetchone()[0]
	if table_exists:
		print("The table exists")
	else:
		print("The table does NOT exists")
except Exception as e:
	print(f"Error connecting to the database: {e}")

#finally:
	# Close the cursor and connection
	#cursor.close()
	#connection.close()

# Check Postgres editing permission by attempting a dummy transcation
try:
	with connection:
		with connection.cursor() as cursor:
			cursor.execute(sql.SQL("BEGIN; INSERT INTO domains (id) VALUES (%s); ROLLBACK"), ('10000'))
	print("Permissions are working")
except Exception as e:
	print("Editing permissions are NOT working")
	print(e)

# Check the Have I Been Pwned API connection
hbp_api_key = os.environ['HIBP_API_KEY']
headers = {'hibp-api-key': hbp_api_key}
response = requests.get("https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com", headers=headers)
if response.status_code == 200:
	print("HaveIBeenPwned API connection works")
elif response.status_code == 404:
	print("HaveIBeenPwned API connection does NOT work")
else:
	print(f"HaveIBeenPwned API unexpected status code: {response.status_code}")

#Checks if the "stored_breach" file exists
file_name = "stored_breach"
file_path = os.path.join(os.getcwd(), file_name) #Assuming the file is in the current working directory

#Checks if the file exits
if os.path.isfile(file_path):
	print(f"The file '{file_name}' exists.")

	#Checks for read permissions
	if os.access(file_path, os.R_OK):
		print(f"The file '{file_name}' is readable.")
	else:
		print(f"The file '{file_name}' is NOT readable")

	#Check for write permissions
	if os.access(file_path, os.W_OK):
		print(f"The file '{file_name}' is writable.")
	else:
		print(f"The file '{file_name}' is NOT writable")

else:
	print(f"The file '{file_name}' does NOT exist.")
	with open(file_path, 'w') as file:
		file.write('') #Creates file if it doesnt exist
	print(f"The file '{file_name}' has been created.")
