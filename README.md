# CISO360AI

[CISO360AI](https://ciso360.ai/) ... 

![License](https://img.shields.io/github/license/ciso360ai/ciso360ai?link=https%3A%2F%2Fgithub.com%2Fciso360ai%2Fciso360ai%2F%3Ftab%3DApache-2.0-1-ov-file%23readme)
[![CodeQL](https://github.com/ciso360ai/ciso360ai/actions/workflows/codeql.yml/badge.svg)](https://github.com/ciso360ai/ciso360ai/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/ciso360ai/ciso360ai/badge)](https://scorecard.dev/viewer/?uri=github.com/ciso360ai/ciso360ai)

## Features
 * Attack Surface Discovery: continuous discovery of assets, identities, domains, hosts, IPs, URLs, ports
 * Offensive Toolchain: network and web assets scanning based on passive/active/offensive tools
 * Vulnerability Management: continuous vulnerability management, triage, prioritisation, tracking and alerting
 * Risk management: risk assessment and mitigation tracking. 
 * Compliance: NIST CSF v2
 * Identity assessment: dark-web compromised identity and IP scanner; HIBP API integration
 * Collaboration: Escalation, sharing, alerting, third-party vendor assessments

![CISO360AI in action](./api/uploads/ciso360ai_slide.gif)

Note: not all features are open-sourced yet

## TBD
 * WIP: AI assisted prioritisation and prediction
 * Privacy assessment: GDPR web scan, cookies, SSL non-conformance
 * ISMS Policy bundle: cybersecurity policy pack compliant with recognised standards
 * Gamification: Solving the puzzle...

## Architecture
1. Scanners: saves scan output to files and sends info to the database.

scan_domain:

    Domain --> subdomain discovery

scan_tls:

    Hosts --> TLS vulns
    IPs --> TLS vulns

2. Database (postgres): stores the app data, including the API internal tables

3. API backend for AAA, back-end UI, custom workflows, based on [Directus](https://github.com/directus/directus)

4. Optional: 

Web App Firewall based on Apache/ModSec
App frontend based on [React-admin](https://marmelab.com/react-admin/)


# Requirements

Minimum: 2 vCPU, 4GB RAM, 80GB disk, static Public IP 

Recommended: 4 vCPU, 8GB RAM, 160GB disk, static Public IP 

# Setup

On your Linux VM (Ubuntu 22.04) instal docker and docker-compose:

```bash
sudo su

#update system and install base
export DEBIAN_FRONTEND=noninteractive
apt update && apt upgrade -yqq && \
apt install -yqq apt-transport-https ca-certificates vim nmap curl software-properties-common git

#configure limits for docker and node
sysctl -w vm.max_map_count=524288 && \
echo "vm.max_map_count=524288" >> /etc/sysctl.conf
sysctl -w fs.file-max=131072 && \
echo "fs.file-max=131072" >> /etc/sysctl.conf

#install docker-ce
apt-get remove docker docker-engine docker.io containerd runc
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt update && apt install -y -q docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

#add ubuntu user to the docker group
usermod -aG docker ubuntu

```

Next add this repo and configure the environment:

```bash
#install software
su ubuntu
cd /opt
sudo mkdir ciso360ai
sudo chown -R ubuntu:ubuntu ciso360ai
#(or change to your user name/group if not on Ubuntu)

git clone https://github.com/ciso360ai/ciso360ai

cd /opt/ciso360ai && cp example.env .env
```

**NOTE: CHANGE DEFAULTS**

## Run
```bash
cd /opt/ciso360ai

#run with local Postgres:
docker compose -f docker-compose.yml -f docker-compose.pglocal.yml up

# OR run with External DB configured in .env
docker compose up -d
```

This will pull or build the local containers and start the app...
Wait until all containers are started:
```
api INFO: Server started at http://0.0.0.0:8055
```
IMPORTANT, once the system is up, add constraints, a one off to provision the instance database. 
Run in a separate console from the project folder:
```
./scripts/fix_constraints.sh
```


For performance it may be useful to run this as root
```
ulimit -n 131072
ulimit -u 8192
```

You can access the CISO360AI UI in a browser: 
```
http://localhost/admin/login
or
http://localhost:8055
```

## Usage
Add a new domain in the UI

You should see some activity in the docker logs:
```
scan_domain  | 
scan_domain  | CISO360AI scan
scan_domain  | 
scan_domain  | 
scan_domain  | whois scan
```

Check results after some time in the UI, e.g. discovered subdomain hosts
You may need to change the filters to "Show all items" since assets are added as inactive since the scan is passive

Change the status to active for any inactive host (or add a new active host or IP) to do a TLS scan

You should see some activity in the docker logs:
```
scan_tls     | 
scan_tls     | CISO360AI scan
scan_tls     | 
scan_tls     | 
scan_tls     | TestSSL scan
scan_tls     | 
```

More relevant modules are available privately, give us a shout if interested in the paid supported version!

## Clean-up
Every time you need to test the end-to-end app:
```bash
docker compose -f docker-compose.yml -f docker-compose.pglocal.yml down -v
```

## Build - optional

docker compose -f docker-compose.yml -f docker-compose.pglocal.yml build

## Backup

For local Postgres:
```bash
./scripts/backup.sh
```

For external Postgres:
```bash
./scripts/backup_ext.sh
```

# References
Icons:
https://fonts.google.com/icons

Regex domains:
https://regexr.com/3au3g

Regex IP:
https://regexr.com/38odc
