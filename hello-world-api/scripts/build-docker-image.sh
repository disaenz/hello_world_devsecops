#!/bin/bash
set -x

cd hello-world-api
pwd
docker build -t hello-world-api:latest .
docker images