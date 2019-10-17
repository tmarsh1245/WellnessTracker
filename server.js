const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('static'));

let db;

const logField = {
    date: 'required',
    overall: 'required',
    food: 'required',
    activity: 'required'
};

MongoClient.connect('mongodb://localhost', {useNewUrlParser: true}).then(connection => {
    db = connection.db('wellnessTracker');
    app.listen(3000, () =>{
        console.log('Wellness Tracker started on port 3000');
    });
}).catch(error => {
    console.log('ERROR:', error);
}
);

app.post('/api/logs', (req, res) => {
    const newLog = req.body;

    db.collection('allLogs').insertOne(newLog).then(result =>
        db.collection('allLogs').find({_date: result.insertedDate}).limit(1).next()
        ).then(newLog =>{
            res.json(newLog);
        }).catch(error =>{
            console.log(error);
        });
    }
);

app.get('/api/logs', (req, res) => {
    const filter = {};
    if(req.query.date){
        filter.date = req.query.date;
    }
    db.collection('allLogs').find(filter).toArray().then(allLogs => {
        const metadata = {total_count: allLogs.length};
        res.json({_metadata: metadata, records: allLogs})
    }).catch(error => {
        console.log(error);
    });
});
