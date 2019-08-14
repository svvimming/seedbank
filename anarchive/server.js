'use strict';

require('dotenv').config({path: '../.env'});
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = process.env.PORT;
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure API routes
var api_routes = fs.readdirSync('./routes/api/');
for (var i=1; i<api_routes.length; i++) {
	var route = api_routes[i].slice(0,-3);
	app.use('/api/' + route, require('./routes/api/' + route));
};

function start_connection() {
	const db = mysql.createConnection({
		host: process.env.DB_HOST,
	 	database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD
	});

	db.connect(function(err) {
		if (err) throw err;
		console.log('Connected to database');
	})

	db.on('error', function(err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.log('Connection lost; restarting');
			start_connection();
		} else {
			throw err;
		}
	})
}

start_connection();

app.listen(port, () => console.log(`Listening on port ${port}`));
