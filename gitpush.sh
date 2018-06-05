#!/bin/bash

cp _site/ppgd/* _travis/ppgd/
cd _travis/ppgd
if [ -n "$(git status --porcelain)" ]; then
    echo -e \\033[32mChanges detected, configuring git\\033[0m
    git config user.name 'Translated by @SerCom_KC'
    git config user.email 'sckctranslate@sercomkc.org'
    git config push.default simple
    echo -e \\033[32mGit configuration completed. Committing changes now\\033[0m
    git add -A
    git commit -m 'Site update'
    echo -e \\033[32mChanges committed, pushing\\033[0m
    git push
fi
