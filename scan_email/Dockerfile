FROM ghcr.io/ciso360ai/scan_image:latest

LABEL \
    name="CISO360AI" \
    author="CISO360AI <office@CISO360.AI>" \
    description="Your All-round Cyber-Intelligent Sidekick"

# Environment Variables
ENV DEBIAN_FRONTEND="noninteractive"
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV TLDEXTRACT_CACHE="/root/tldextract.cache"
ENV PGTT_RESTPORT=8008

ARG TARGETARCH
ARG TARGETPLATFORM

ENV GOROOT="/usr/local/go"
ENV GOPATH=$HOME/go
ENV PATH="${PATH}:${GOROOT}/bin:${GOPATH}/bin"

# Make directory for app
WORKDIR /tools

#Add configs
RUN mkdir -p /root/.config
COPY config/* /root/.config/

RUN echo -e "ENABLED=1\nIGNORE_RESOLVCONF=yes" > /etc/default/dnsmasq
COPY config/dnsmasq.conf /etc/dnsmasq.conf 

COPY scripts/* /usr/local/bin/
RUN chmod +x /usr/local/bin/* \
    && pip3 install --no-cache-dir --break-system-packages -r /usr/local/bin/requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /results
ENTRYPOINT ["/entrypoint.sh"]
CMD [ "--log-file-format=text", "--log-level=error", "--log-database-level=error"]
