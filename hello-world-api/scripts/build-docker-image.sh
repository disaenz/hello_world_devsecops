#!/bin/bash

cd hello-world-api

docker image prune -a -f
docker images
docker build -t disaenz2/hello-world-api .
docker images