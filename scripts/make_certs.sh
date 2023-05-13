#!/bin/bash
cd rproxy/certs
openssl req -x509 -days 365 -new \
    -config ../apache/openssl.conf \
    -keyout ./server.key \
    -out ./server.crt
