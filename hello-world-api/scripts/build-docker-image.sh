#!/bin/bash

docker build -t hello-world-api:latest -f hello-world-api/Dockerfile .
docker images