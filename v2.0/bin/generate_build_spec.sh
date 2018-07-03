#!/bin/sh

[ -z "$GIT_BRANCH" ] && GIT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
GIT_SHORT=$(git rev-parse --short HEAD)
GIT_DATE=$(git log -1 --date=iso --pretty=format:"%ad")
NOW_DATE=$(date "+%F %H:%M:%S %z")

if [ -z REACT_APP_NODE_ENV ]; then
  REACT_APP_NODE_ENV=$1
fi

echo "{\"commit\":\"$GIT_SHORT\",\"branch\":\"$GIT_BRANCH\",\"commit_date\":\"$GIT_DATE\",\"build_time\":\"$NOW_DATE\", \"react_app_node_env\":\"$REACT_APP_NODE_ENV\"}" > build.json