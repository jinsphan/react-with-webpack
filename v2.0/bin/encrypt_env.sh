#!/bin/sh
# Standard build script to build multi environment dotenv files
# for node projects. The derived products include the encrypted
# dotenv file

PATH_TO_CONFIG=$1

# check with prerequsites
if [ -z "${REACT_APP_NODE_ENV}" ]; then
  echo 'info: REACT_APP_NODE_ENV is not set. To skip this prompt, execute your script with REACT_APP_NODE_ENV'
  read -p "Enter REACT_APP_NODE_ENV: " react_app_node_env
  if [ -z "${react_app_node_env}" ]; then
    echo 'error: react_app_node_env cannot be an empty string.'
    exit 1
  else
    REACT_APP_NODE_ENV="${react_app_node_env}"
  fi
fi

# check with prerequsites
if [ -z "${ENV_PASSWORD}" ]; then
  echo 'info: ENV_PASSWORD is not set. To skip this prompt, execute your script with ENV_PASSWORD'
  read -p "Enter password to encrypt your env file: " password
  if [ -z "${password}" ]; then
    echo 'error: password cannot be an empty string.'
    exit 1
  else
    ENV_PASSWORD="${password}"
  fi
fi

# main
openssl enc -aes-256-cbc \
  -in "${PATH_TO_CONFIG}/.env.${REACT_APP_NODE_ENV}.decrypted" \
  -out "${PATH_TO_CONFIG}/.env.${REACT_APP_NODE_ENV}.encrypted" \
  -a -salt -k ${ENV_PASSWORD}