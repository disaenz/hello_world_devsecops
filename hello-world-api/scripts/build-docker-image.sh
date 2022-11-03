#!/bin/bash
set -x

docker build -t hello-world-api:latest -f hello-world-api/Dockerfile .
docker images