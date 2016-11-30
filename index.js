'use strict';

const express = require('express');
const appEx = express();

const frontend = express.static('app');

appEx.get('/', frontend);

const config = require('./config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.database);


appEx.listen(6968, '0.0.0.0', function() {
	console.log('Start port: 6968');
});