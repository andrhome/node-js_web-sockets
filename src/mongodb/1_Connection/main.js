const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    console.log('1_Connection established!');

    db.close();
});