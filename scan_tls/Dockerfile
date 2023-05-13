# Base image
FROM ubuntu:22.04

# Environment Variables
ENV DEBIAN_FRONTEND="noninteractive"
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV TLDEXTRACT_CACHE="/root/tldextract.cache"
ENV pg_timetable_ver="5.2.0"
ENV go_ver="1.19.5"

ARG TARGETARCH
ARG TARGETPLATFORM

# Install essentials
RUN apt update -y && apt install -y --no-install-recommends \
    build-essential \
    bsdmainutils \
    curl \
    dnsmasq \
    dnsutils \
    git \
    jq \
    nano \
    nmap \
    net-tools \
    iputils-ping \
    python3 \
    python3-dev \
    python3-pip \
    python3-netaddr \
    wget \
    whois

RUN sed -Ei 's/^# deb-src /deb-src /' /etc/apt/sources.list \
    && apt update -y \
    && apt autoremove -qy \
    && rm -rf /var/lib/apt/lists/*

# Download and install specific Intel versions
RUN \
  if [ "$TARGETPLATFORM" = 'linux/amd64' ]; then \
    wget https://github.com/cybertec-postgresql/pg_timetable/releases/download/v${pg_timetable_ver}/pg_timetable_${pg_timetable_ver}_Linux_x86_64.tar.gz \
    && tar -xvf pg_timetable_${pg_timetable_ver}_Linux_x86_64.tar.gz \
    && mv pg_timetable_${pg_timetable_ver}_Linux_x86_64/pg_timetable /usr/bin \
    && rm -rf pg_timetable_${pg_timetable_ver}_Linux_x86_64* \
    && wget https://go.dev/dl/go${go_ver}.linux-amd64.tar.gz \
    && rm -rf /usr/local/go \
    && tar -C /usr/local -xzf go${go_ver}.linux-amd64.tar.gz \
    && rm -rf *.tar.gz \
  ; fi

# Download and install specific ARM versions
RUN \
  if [ "$TARGETPLATFORM" = 'linux/arm64' ]; then \
    wget https://github.com/cybertec-postgresql/pg_timetable/releases/download/v${pg_timetable_ver}/pg_timetable_${pg_timetable_ver}_Linux_arm64.tar.gz \
    && tar -xvf pg_timetable_${pg_timetable_ver}_Linux_arm64.tar.gz \
    && mv pg_timetable_${pg_timetable_ver}_Linux_arm64/pg_timetable /usr/bin \
    && rm -rf pg_timetable_${pg_timetable_ver}_Linux_arm64* \
#go1.17 is needed by nuclei, do not upgrade to latest Ubuntu!
    && wget https://go.dev/dl/go${go_ver}.linux-arm64.tar.gz \
    && rm -rf /usr/local/go \
    && tar -C /usr/local -xzf go${go_ver}.linux-arm64.tar.gz \
    && rm -rf *.tar.gz \
  ; fi

ENV GOROOT="/usr/local/go"
ENV GOPATH=$HOME/go
ENV PATH="${PATH}:${GOROOT}/bin:${GOPATH}/bin"

# Make directory for app
WORKDIR /tools

# Download Go packages
RUN GOARCH=${TARGETARCH} go install github.com/tomnomnom/anew@latest

#Install TestSSL
RUN git clone --depth 1 https://github.com/drwetter/testssl.sh.git /tools/testssl.sh \
    && ln -s /tools/testssl.sh/testssl.sh /usr/local/bin/testssl

COPY scripts/* /usr/local/bin/
RUN chmod +x /usr/local/bin/* \
    && pip3 install --no-cache-dir -r /usr/local/bin/requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV PGTT_RESTPORT 8008

WORKDIR /results
ENTRYPOINT ["/entrypoint.sh"]
CMD [ "--log-file-format=text", "--log-level=error", "--log-database-level=error"]
