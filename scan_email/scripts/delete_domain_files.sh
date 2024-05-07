#!/bin/bash

#Author: Soham
#Script is to delete domain-related files from file system 

DOMAIN_NAME=$1 
DOMAIN_FILES_PATH="/results/${DOMAIN_NAME}"

delete_files() {
   echo "Attempting to delete files for domain:$DOMAIN_NAME"

   if [ -d "$DOMAIN_FILES_PATH" ]; then
      echo "Directory found. Proceeding with deletion."
      rm -rf "$DOMAIN_FILES_PATH"

      if ! [ -d "$DOMAIN_FILES_PATH" ]; then
         echo "Domain files for ${DOMAIN_NAME} deleted successfully."
      else
         echo "Failed to delete domain files."
      fi
   fi
}



if [ -z "$DOMAIN_NAME" ]; then
   echo "Usage: $0 <domain_name>"
   echo  "Please provide a domain name (e.g., 'icloud.com')."
   exit 1
else 
   delete_files
fi

