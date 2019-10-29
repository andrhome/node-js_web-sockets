const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/userCollectionDB';

MongoClient.connect(url, (err, client) => {
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    const cursor = collection.find();

    cursor.toArray((err, res) => {
        console.log('##################### All Data ############################');
        console.log(res);
        console.log('###########################################################');

        collection.find({name: 'Sergey'}).toArray((error, resp) => {
            console.log('########## Found users with name Sergey ###############');
            console.log(resp);
            console.log('#######################################################');

            collection.findOne({age: {$lt: 30}}).then(value => {
                console.log('########## Found an user with less than 30 ###############');
                console.log(value);
                console.log('##########################################################');

                db.close();
            });
        });
    });
});