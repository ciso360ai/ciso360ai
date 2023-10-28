FROM ghcr.io/ciso360ai/scan_image:latest

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

# Make directory for app
WORKDIR /tools

# Download Go packages
RUN GOARCH=${TARGETARCH} go install github.com/tomnomnom/anew@latest
RUN GOARCH=${TARGETARCH} go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest 
RUN GOARCH=${TARGETARCH} go install github.com/owasp-amass/amass/v3/...@master
RUN GOARCH=${TARGETARCH} go install github.com/projectdiscovery/httpx/cmd/httpx@latest

#Add configs
RUN mkdir /root/.config
COPY config/* /root/.config/

RUN echo -e "ENABLED=1\nIGNORE_RESOLVCONF=yes" > /etc/default/dnsmasq
COPY config/dnsmasq.conf /etc/dnsmasq.conf 

COPY scripts/* /usr/local/bin/
RUN chmod +x /usr/local/bin/* \
    && pip3 install --no-cache-dir -r /usr/local/bin/requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV PGTT_RESTPORT 8008

WORKDIR /results
ENTRYPOINT ["/entrypoint.sh"]
CMD [ "--log-file-format=text", "--log-level=error", "--log-database-level=error"]
