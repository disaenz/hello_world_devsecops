#!/bin/bash

cd hello-world-api

docker image prune -a -f
docker build -t disaenz2/hello-world-api .