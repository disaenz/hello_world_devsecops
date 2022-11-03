#!/bin/bash
set -x

cd hello-world-api
pwd
docker build -t disaenz2/hello-world-api .
docker images