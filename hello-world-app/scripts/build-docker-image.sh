#!/bin/bash

cd hello-world-app

docker image prune -a -f
docker build -t disaenz2/hello-world-app .