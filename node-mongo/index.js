const MongoCilent = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoCilent.connect(url,(err , cilent) => {
    assert.equal(err , null);

    console.log("Connected correctly to the Server");

    const db = cilent.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({"name":"Uthappizza","description":"testt"} ,(err,result) => {
        assert.equal(err , null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err , docs)=> {
            assert.equal(err , null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes' , (err , result) => {
                assert.equal(err , null);

                cilent.close();
            });
        });
    });
})