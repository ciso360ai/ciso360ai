FROM directus/directus:11.11.0

WORKDIR /directus
USER root

ADD ./migrations ./migrations/
ADD ./uploads ./uploads/

EXPOSE 8055

# CMD npx directus bootstrap --skipAdminInit && \
CMD echo "Starting CISO360.AI ..." && \
    node cli.js bootstrap && \
## Add another user
    # role=$(npx directus roles create --role Admin2 --admin true | grep -v '✨') && \
    # npx directus users create --email "$ADMIN2_EMAIL" --password "$ADMIN2_PASSWORD" --role "$role" && \
    # echo "$(date +%T) ✨ Admin2 user created successfully" && \
## Restore snapshot and migrate to latest
    node cli.js schema apply /directus/migrations/snapshot.yaml -y && \
    node cli.js database migrate:latest && \
    pm2-runtime start ecosystem.config.cjs
