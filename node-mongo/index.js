const MongoCilent = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoCilent.connect(url,(err , cilent) => {
    assert.equal(err , null);

    console.log("Connected correctly to the Server");

    const db = cilent.db(dbname);

    dboper.insertDocument( db , {name:"Uthappizza" , description :'Test'} , 'dishes' , (result) => {
        console.log("Insert Documents:\n" , result.ops);

        dboper.findDocument(db ,'dishes' , (docs) => {
            console.log("Found Documents", docs);

            dboper.updateDocument(db , {name:"Uthappizza"},{description :"Test Updated"} , 'dishes', (result) =>{
                console.log("Updated Document:\n",result.result);

                dboper.findDocument(db ,'dishes' , (docs) => {
                    console.log("Found Documents", docs);  

                    // db.dropCollection('dishes' , (result) => {
                    //     console.log("Droped Collection" ,result);

                    cilent.close();
                    // });
                });
            });
        });
    });
});