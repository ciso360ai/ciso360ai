# See: https://github.com/paescuj/jaa/blob/main/directus/Dockerfile
FROM node:18-alpine AS build

WORKDIR /home/app
COPY extensions/dev dev

RUN mkdir out && \
    cd dev && \
    for dir_ext in */; do \
        cd "$dir_ext" && \
            for dir in */; do \
                cd "$dir" && \
                npm install && \
                npm run build && \
                mkdir -p ../../../out/$dir_ext$dir && \
                mv dist ../../../out/$dir_ext$dir &&  \
                cd .. \
            ; done && \
        cd .. \
    ; done

# FROM node:16-alpine
FROM ciso360ai/directus-mod:10.1.0-mod

WORKDIR /directus
USER root

# disable npm update warnings
RUN echo "update-notifier=false" >> ~/.npmrc
RUN apk upgrade --no-cache && \
    apk add --no-cache \
    ssmtp tzdata yq python3 build-base && \
    ln -sf /usr/bin/python3 /usr/bin/python

COPY package.json ./

ADD ./extensions ./extensions/
ADD ./uploads ./uploads/
# ADD .env ./

COPY --from=build /home/app/out /tmp/available

RUN npm install

EXPOSE 8055

# CMD npx directus bootstrap --skipAdminInit && \
CMD npx directus bootstrap && \
 cp -r /tmp/available/* /directus/extensions/available/ && \
## Add another user
    # role=$(npx directus roles create --role Admin2 --admin true | grep -v '✨') && \
    # npx directus users create --email "$ADMIN2_EMAIL" --password "$ADMIN2_PASSWORD" --role "$role" && \
    # echo "$(date +%T) ✨ Admin2 user created successfully" && \
## Restore snapshot and migrate to latest
    npx directus schema apply /directus/extensions/snapshots/snapshot.yaml -y && \
    npx directus database migrate:latest && \
    npx directus start
