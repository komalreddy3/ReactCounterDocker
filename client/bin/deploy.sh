#!/bin/bash

if [[ $1 == "up" || $1 == "down" ]];
then
    cd ..
    echo "Running docker-compose.yaml $1"
    docker-compose $1
else 
    echo "Need format ./deploy.sh up|down"
fi
