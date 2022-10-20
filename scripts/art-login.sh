#!/bin/bash

echo "${ART_TOKEN}" | docker login --username ${ART_USERNAME} --password-stdin https://${ART_DOCKER_REPO}.${ART_HOST}