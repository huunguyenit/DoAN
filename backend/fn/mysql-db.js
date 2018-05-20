var mysql = require('mysql')
var	q = require('q');

var configdb = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dbsitedaugia'
}

exports.load = function(sql) {
	var d = q.defer();

    var cn = mysql.createConnection(configdb);

	/*cn.connect((error) => {
		if (error) {
			console.log(err);
		} else {
			console.log('connection database success !')
		}
	});*/
	cn.connect();
	
	cn.query(sql, function (error, rows, fields) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(rows);
		}
		cn.end();
	});

	return d.promise;
}

exports.save = function(sql) {
	
    var cn = mysql.createConnection({
		host: _HOST,
		port: _PORT,
		user: _USER,
		password: _PWD,
		database: _DB
	});

	cn.connect();
	cn.query(sql, function (error, value) {
		if (error) {
			console.log(error);
		} else {
			console.log(value);
		}

		cn.end();
	});
}