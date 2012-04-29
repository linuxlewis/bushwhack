#!/bin/bash

git pull
git push github master
git push heroku master
echo -e "\a"
