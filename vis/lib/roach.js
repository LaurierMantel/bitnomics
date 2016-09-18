'use strict';

var pg = require('pg');

var config = {
	user: 'root', //env var: PGUSER
	database: 'cockdb69', //env var: PGDATABASE
	password: 'Hack123', //env var: PGPASSWORD
	host: 'localhost', // Server hosting the postgres database
	port: 26257, //env var: PGPORT
	max: 10, // max number of clients in the pool
	idleTimeoutMillis: 30000 };

//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);

pool.on('error', function (err, client) {
	console.error('idle client error', err.message, err.stack);
});

exports.getTransactions = function (cb) {
	pool.connect(function (err, client, done) {
		if (err) {
			return cb('error fetching client from pool');
		}
		client.query('SELECT * from test_transactions limit 100', function (err, result) {
			done();
			if (err) {
				return cb('error running query');
			}
			console.log('hit em with the callback');
			cb(result.rows);
		});
	});
};