var pg = require('pg');

var config = {
  user: 'root', //env var: PGUSER 
  database: 'cockdb69', //env var: PGDATABASE 
  password: 'Hack123', //env var: PGPASSWORD 
  port: 26257, //env var: PGPORT 
  host: 'localhost',
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed 
};

var pool = new pg.Pool(config);
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});
exports.getTransactions = function(cb) {
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	 	client.query('SELECT * from test_transactions limit 100', function(error, result) {
	    	if (error) {
	      	    return cb('error running query');
	      	}
			console.log('hit em with the callback');
	      	cb(result.rows);
    	});
	});
};

