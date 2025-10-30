#!/bin/bash

CONTAINERNAME="devenv-ghpages"
IMAGENAME="devenv-ghpages"

podman build -t $IMAGENAME .
podman run -d \
    --name $CONTAINERNAME \
    --volume "$PWD":/workspace:Z \
    --userns=keep-id \
    --replace \
    -p 5173:5173 \
    $IMAGENAME \
    /bin/bash -c "sleep infinity" 


sleep 1
podman exec -it $CONTAINERNAME /bin/bash 

