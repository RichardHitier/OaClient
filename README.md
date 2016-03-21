# OaClient
Open Agenda simple web client

## Install and Run

### at first
    npm install
    touch lib/angular.min.js

### then
    cp oacfg.js-dist oacfg.js
    $(edit) oacfg.js # << you openagenda keys go there
    node simpleServer.js

### at last, 
    $(browser) localhost:8080

## A node/angular single page

- `simpleServer.js` the node part 
- including `oaTools.js` the openagenda requester
- serving `simpleForm.html` and `js/simpleForm.js` angular client

## TODO

- find a way to import angular dependency 
