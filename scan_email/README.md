# RUN

# BUILD

docker build -t ciso360ai/scan_email .

# PUSH to dockerhub
docker buildx build --push --tag ciso360ai/scan_email:latest .
