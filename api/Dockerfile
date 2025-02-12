FROM directus/directus:11.4.1

WORKDIR /directus
USER root

# disable npm update warnings
# RUN echo "update-notifier=false" >> ~/.npmrc
# RUN apk upgrade --no-cache && \
#     apk add --no-cache \
#     ssmtp tzdata yq python3 build-base py3-setuptools && \
#     ln -sf /usr/bin/python3 /usr/bin/python

ADD ./migrations ./migrations/
ADD ./uploads ./uploads/

# Currently required, check if needed in future release
# RUN corepack enable \
#   && corepack prepare pnpm@9.15.3 --activate \
#   && chown node:node /directus

RUN npm install --global \
	pm2@5 \
	corepack@latest # Remove again once corepack >= 0.31 made it into base image

EXPOSE 8055

# CMD : \
# 	&& node cli.js bootstrap \
# 	&& pm2-runtime start ecosystem.config.cjs \
# 	;

# CMD npx directus bootstrap --skipAdminInit && \
CMD echo "Starting CISO360.AI ..." && \
    node cli.js bootstrap && \
    # cp -r /tmp/available/* /directus/extensions/available/ && \
## Add another user
    # role=$(npx directus roles create --role Admin2 --admin true | grep -v '✨') && \
    # npx directus users create --email "$ADMIN2_EMAIL" --password "$ADMIN2_PASSWORD" --role "$role" && \
    # echo "$(date +%T) ✨ Admin2 user created successfully" && \
## Restore snapshot and migrate to latest
    node cli.js schema apply /directus/migrations/snapshot.yaml -y && \
    node cli.js database migrate:latest && \
    pm2-runtime start ecosystem.config.cjs
