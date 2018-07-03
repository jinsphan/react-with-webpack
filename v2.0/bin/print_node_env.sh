#!/bin/sh

echo 'printing lolg'
osascript -e 'tell application "Terminal" to do script "cd $PROJECT_ROOT && yarn env:sync"'