#!/usr/bin/env bash
set -e
yarn build
cd build
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:mzhaonanq/moneylog-react-website.git master:gh-pages
cd -