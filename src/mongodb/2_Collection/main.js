const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/userCollectionDB';

MongoClient.connect(url, (err, client) => {
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    const user = {firstName: 'Ivan', lastName: 'Komarov', age: 30};

    collection.insertOne(user, (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log('RESULT: ', result.ops);
        client.close();
    });
});