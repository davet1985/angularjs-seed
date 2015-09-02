# AngularJS seed

[![Build Status](https://travis-ci.org/davet1985/angularjs-seed.svg?branch=master)](https://travis-ci.org/davet1985/angularjs-seed)

## Development

### Local

To run locally for development ensure you have the following installed.

* node.js, we are using version 0.10

For mac I would recommend installing Node Version Manager (nvm) through homebrew.

```sh
brew install nvm
nvm install node
nvm use node
```

Node comes with a version of NPM but to make sure it's up-to-date run `npm install -g npm`

Then a couple of node modules need to be installed globally, to do this run: -

```sh
npm install -g gulp
npm install -g bower
```

From here you should be able to run `npm start` and it will download all the necessary node modules, bower components and gulp will do it's thing and the server should be running on http://localhost:8080.

## Development Options

You might want to install nodemon (`npm install -g nodemon`) and run using `nodemon bin/www` - this will watch for file changes and automatically restart the server for you.

To watch and compile assets (javascript and SASS) and run unit tests you should also have a terminal open running `gulp watch`.
