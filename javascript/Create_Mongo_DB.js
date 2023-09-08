var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.2:3000/testdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});