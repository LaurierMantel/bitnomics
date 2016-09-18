var pg = require('pg');

var config = {
  user: 'root', //env var: PGUSER
  database: 'cockdb69', //env var: PGDATABASE
  password: 'Hack123', //env var: PGPASSWORD
  host: '45.79.165.171', // Server hosting the postgres database
  port: 26257, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};


//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);


pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});

exports.getTransactions = function() {
	pool.connect(function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * from test_transactions', function(err, result) {
	    done();

	    if(err) {
	      return console.error('error running query', err);
	    }
	    console.log(result.rows[0].number);
	  });
	});
};