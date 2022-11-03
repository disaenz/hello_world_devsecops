#!/bin/bash

cd hello-world-api

docker image prune -a
docker images
docker build -t disaenz2/hello-world-api .
docker images