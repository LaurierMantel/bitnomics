var pg = require('pg');

var config = {
  user: 'root', //env var: PGUSER
  database: 'cockdb69', //env var: PGDATABASE
  password: 'Hack123', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 26257, //env var: PGPORT
};


exports.getTransactions = function(cb) {
	var client = new pg.Client(config);
	client.connect(function(err) {
	    if (err) throw err;
	    client.query('SELECT * from test_transactions limit 100', function(error, result) {
	    	if (error) {
	      	    return cb('error running query');
	      	}
			console.log('hit em with the callback');
	      	cb(result.rows);
		    client.end(function (err) {
		    	if (err) throw err;
		    });
	    });
	});
};