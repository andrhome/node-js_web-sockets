const MongoClient = require('mongodb').MongoClient;
const users = require('../users');
const url = 'mongodb://localhost:27017/userCollectionDB';

MongoClient.connect(url, (err, client) => {
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');

    collection.insertMany(users, (error, results) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log('Data added!');
        console.log('RESULTS: ', results);
        client.close();
    });
});