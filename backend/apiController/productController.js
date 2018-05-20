var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from product';
	return db.load(sql);
}

exports.load = function(id) {
	
}

exports.add = function() {
	
}

exports.delete = function(id) {
	
}

exports.update = function() {
	
}