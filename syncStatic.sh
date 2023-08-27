#!/bin/bash
# Usage: ./syncStatic.sh -m "commit message"
# Description: Sync static files to static git folder
# Author : danhnq
# Date : 2023-05-20

while getopts m: flag
do
    case "${flag}" in
        m) commit=${OPTARG};;
    esac
done
#Variables: change it
CM_COMMIT=${commit:-"Update version"}
FOLDER_BUILD="./build"
FOLDER_STATIC="../fintech-static/stg/react/admin-v2/"

echo "Start build react project:"
# Change it if you use another framework
yarn build:stg
echo "End build static files"

echo "Copy static files to static git folder: Merge if exist"
ditto  "$FOLDER_BUILD" "$FOLDER_STATIC"
echo "End copy static files"

echo "Start sync static git folder"
cd "$FOLDER_STATIC" || exit
git pull
git add .
git commit -m "$CM_COMMIT"
git push origin master
echo "End sync static git folder"


echo "End sync"

