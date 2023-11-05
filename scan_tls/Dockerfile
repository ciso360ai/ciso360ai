FROM ghcr.io/ciso360ai/scan_image:latest

LABEL \
    name="CISO360AI" \
    author="CISO360AI <office@CISO360.AI>" \
    description="Your All-round Cyber-Intelligent Sidekick"

# Environment Variables
ENV DEBIAN_FRONTEND="noninteractive"
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV TLDEXTRACT_CACHE="/root/tldextract.cache"

ARG TARGETARCH
ARG TARGETPLATFORM

ENV GOROOT="/usr/local/go"
ENV GOPATH=$HOME/go
ENV PATH="${PATH}:${GOROOT}/bin:${GOPATH}/bin"
ENV PGTT_RESTPORT 8008

# Make directory for app
WORKDIR /tools

#Install TestSSL
RUN git clone --depth 1 https://github.com/drwetter/testssl.sh.git /tools/testssl.sh \
    && ln -s /tools/testssl.sh/testssl.sh /usr/local/bin/testssl

COPY scripts/* /usr/local/bin/
RUN chmod +x /usr/local/bin/* \
    && pip3 install --no-cache-dir -r /usr/local/bin/requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /results
ENTRYPOINT ["/entrypoint.sh"]
CMD [ "--log-file-format=text", "--log-level=error", "--log-database-level=error"]
