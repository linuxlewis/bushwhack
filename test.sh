#!/bin/sh

NODE_ENV=testing PORT=3000 node index.js
./node_modules/.bin/mocha --reporter list test/*/*



