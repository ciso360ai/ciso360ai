#!/bin/bash

#cd /opt/cyberscan_api/backup
docker exec -i postgres /bin/bash -c "PGPASSWORD=XXX pg_dump -c -C -x -s --column-inserts --no-comments --username \$POSTGRES_USER \$POSTGRES_DB > /backup/schema-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -c -C -x --column-inserts --no-comments --username \$POSTGRES_USER \$POSTGRES_DB > /backup/full-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -c -C -x --column-inserts --exclude-table-data '*.directus*' --no-comments --username \$POSTGRES_USER \$POSTGRES_DB > /backup/full_nodirectus-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -C -x -a --column-inserts --no-comments --username \$POSTGRES_USER \$POSTGRES_DB > /backup/data-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -C -x -a --column-inserts --exclude-table-data '*.directus*' --no-comments --username \$POSTGRES_USER \$POSTGRES_DB > /backup/data_nodirectus-$(date '+%y%m%d_%H%M').sql
PGPASSWORD=XXX pg_dumpall -U \$POSTGRES_USER > /backup/all.sql
chmod 777 /backup/*.sql
"

#sudo chown ubuntu:ubuntu /backup/*.sql

docker exec -i api /bin/sh -c "chown -R node:node /directus/migrations && npx directus schema snapshot --yes /directus/migrations/\$(date +%F)\-snapshot-\$(date +%s)\.yaml"

#docker exec -i directus /bin/sh -c "npx directus schema apply --yes /directus/migrations/snapshot.yaml"

docker exec -i postgres /bin/bash -c "PGPASSWORD=XXX pg_dump --data-only --blobs --no-privileges --disable-triggers --inserts --on-conflict-do-nothing --quote-all-identifiers --no-comments \
  -t public.directus_roles \
  -t public.directus_users \
  -t public.organisations \
  -t public.compliance \
  -t public.frameworks \
  -t public.compliance_frameworks \
  -t public.directus_permissions \
  -t public.directus_notifications \
  -t public.directus_presets \
  -t public.directus_files \
  -t public.directus_shares \
  -t public.directus_settings \
  -t public.directus_webhooks \
  -t public.organisations_directus_users \
  -t public.vendors \
  -t public.vendors_organisations \
  -t public.actions \
  -t public.risks \
  -t public.actions_directus_users \
  -t public.risks_actions \
  -t public.risks_directus_users \
  -t public.risks_scope \
  -t public.directus_flows \
  -t public.directus_operations \
  -t public.directus_dashboards \
  -t public.directus_panels \
  -t public.directus_activity \
  -t public.directus_folders \
  --username \$POSTGRES_USER \$POSTGRES_DB > /backup/data_restore-$(date '+%y%m%d_%H%M').sql
chmod 777 /backup/*.sql
"
