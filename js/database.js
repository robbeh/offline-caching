function createDatabase() {
	var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
	buildTables(db);
	saveText(db);
	//dropTable(db,'bar');
	//dropTable(db,'foo');
}

function buildTables(db) {
	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE foo (id INTEGER PRIMARY KEY AUTOINCREMENT, text)');
	});

	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE bar (id INTEGER PRIMARY KEY AUTOINCREMENT, name)')
	});
}

function saveText(db) {
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO foo (text) VALUES (?)', ['test']);
	});
}

function dropTable(db, name) {
	db.transaction(function (tx) {
		tx.executeSql('DROP TABLE '+name);
	});
}