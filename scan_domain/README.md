# RUN

# BUILD

docker build -t ciso360ai/scan_domain .

# PUSH to dockerhub
docker buildx build --push --tag ciso360ai/scan_domain:latest .
