# How to add new module

Exammple of new module for [CISO360AI](https://ciso360.ai/)

## Create module folder

For example, to add a network discovery module, make a specific folder:
```
cp scan_tls scan_domain

```

## Update Dockerfile

Install and configure specific tools, see scan_tls or scan_domain files for examples

## Add docker entry
```
  scan_domain:
    # image: ciso360ai/scan_domain:latest
    build:
      context: ./scan_domain/.
    container_name: scan_domain
    hostname: scan_domain
    restart: always
    depends_on:
      scan_tls:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:8008/readiness || exit 1"]
      timeout: 1s
      interval: 1s
      retries: 5
    environment:
      POSTGRES_HOST: ${PG1_HOST}
      POSTGRES_PORT: ${PG1_PORT}
      POSTGRES_DB: ${PG1_DB}
      POSTGRES_USER: ${PG1_USER}
      POSTGRES_PASSWORD: ${PG1_PASS}
      SERVER_NAME: ${SERVER_NAME}
    # command: ["--cron-workers=4"]
    volumes:
      - ./results:/results
      - ./logs:/logs
      - ./scan_domain/scripts/scan_domain:/usr/local/bin/scan_domain
      - ./scan_domain/scripts/import_scan:/usr/local/bin/import_scan
      - ./scan_domain/config:/scan_domain/config
    networks:
      - internal
      - db
```

## Add DB constraints
```
cp ./scripts/regular_tls_scan.sh ./scripts/regular_domain_scan.sh
```

Modify as needed: ./scripts/regular_domain_scan.sh

Configure the new file at the end of ./scripts/fix_constraints.sh

```
$PWD/scripts/regular_domain_scan.sh

```

## Rebuild
docker compose build
