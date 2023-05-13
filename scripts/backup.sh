#!/bin/bash

#cd /opt/cyberscan_api/backup
docker exec -i postgres /bin/bash -c "PGPASSWORD=XXX pg_dump -c -C -x -s --column-inserts --no-comments --username root ciso360ai > /backup/schema-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -c -C -x --column-inserts --no-comments --username root ciso360ai > /backup/full-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -c -C -x --column-inserts --exclude-table-data '*.directus*' --no-comments --username root ciso360ai > /backup/full_nodirectus-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -C -x -a --column-inserts --no-comments --username root ciso360ai > /backup/data-$(date '+%y%m%d_%H%M').sql && \
PGPASSWORD=XXX pg_dump -C -x -a --column-inserts --exclude-table-data '*.directus*' --no-comments --username root ciso360ai > /backup/data_nodirectus-$(date '+%y%m%d_%H%M').sql
PGPASSWORD=XXX pg_dumpall -U root > /backup/all.sql
"

#sudo chown ubuntu:ubuntu /backup/*.sql

docker exec -i api /bin/sh -c "chown -R node:node /directus/extensions && npx directus schema snapshot --yes /directus/extensions/snapshots/\$(date +%F)\-snapshot-\$(date +%s)\.yaml"

#docker exec -i directus /bin/sh -c "npx directus schema apply --yes /directus/extensions/snapshots/snapshot.yaml"

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
  --username root ciso360ai > /backup/data_restore-$(date '+%y%m%d_%H%M').sql
"
