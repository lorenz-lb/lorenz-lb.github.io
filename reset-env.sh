#!/bin/bash


echo "STOP CONTAINER"
podman container stop --all 
echo "DELETE CONTAINER"
podman container rm --all 
#echo "DELETE IMAGE"
#podman image rm localhost/devenv-ghpages
