#!/bin/bash

echo Cloning repository
git clone https://${GH_TOKEN}@github.com/$TRAVIS_REPO_SLUG _travis/ppgd
rm -rf _travis/ppgd/*
echo -e \\033[32mRepository cloned successfully\\033[0m
