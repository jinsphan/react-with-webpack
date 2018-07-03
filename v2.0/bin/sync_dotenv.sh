#!/bin/sh

PROJECT_ROOT=$1
EVENT=$2
PATH_TO_DECRYPTED=$3
tmp=${PATH_TO_DECRYPTED#*.env.}   # remove prefix ending in ".env."
REACT_APP_NODE_ENV=${tmp%.decrypted*}   # remove suffix starting with ".decrypted"

if [ "${EVENT}" = "change" ]; then
  REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV ${PROJECT_ROOT}/bin/encrypt_env.sh 
fi