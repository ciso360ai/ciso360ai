# See: https://github.com/paescuj/jaa/blob/main/directus/Dockerfile
# FROM node:18-alpine AS build

# WORKDIR /home/app
# COPY extensions/dev dev

# RUN mkdir out && \
#     cd dev && \
#     for dir in */; do \
#         cd "$dir" && \
#         npm install && \
#         npm run build && \
#         mkdir -p ../../out/$dir && \
#         mv dist ../../out/$dir &&  \
#         cd .. \
#     ; done

# FROM node:16-alpine
FROM directus/directus:10.13.2

WORKDIR /directus
USER root

# disable npm update warnings
RUN echo "update-notifier=false" >> ~/.npmrc
RUN apk upgrade --no-cache && \
    apk add --no-cache \
    ssmtp tzdata yq python3 build-base py3-setuptools && \
    ln -sf /usr/bin/python3 /usr/bin/python

COPY package.json ./

# ADD ./extensions ./extensions/
ADD ./migrations ./migrations/
ADD ./uploads ./uploads/
# ADD .env ./

# COPY --from=build /home/app/out /tmp/available

# Currently required, check if needed in future release
RUN corepack enable \
  && corepack prepare pnpm@8.15.5 --activate \
  && chown node:node /directus

RUN pnpm install --prefer-offline        

EXPOSE 8055

# CMD npx directus bootstrap --skipAdminInit && \
CMD echo "Starting CISO360.AI ..." && \
    npx directus bootstrap && \
    # cp -r /tmp/available/* /directus/extensions/available/ && \
## Add another user
    # role=$(npx directus roles create --role Admin2 --admin true | grep -v '✨') && \
    # npx directus users create --email "$ADMIN2_EMAIL" --password "$ADMIN2_PASSWORD" --role "$role" && \
    # echo "$(date +%T) ✨ Admin2 user created successfully" && \
## Restore snapshot and migrate to latest
    npx directus schema apply /directus/migrations/snapshot.yaml -y && \
    npx directus database migrate:latest && \
    npx directus start
