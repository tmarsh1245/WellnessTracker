const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('static'));

let db;

MongoClient.connect('mongodb://localhost', {useNewUrlParser: true}).then(connection => {
    db = connection.db('wellnessTracker');
    app.listen(3000, () =>{
        console.log('Wellness Tracker started on port 3000');
    });
}).catch(error => {
    console.log('ERROR:', error);
}
);

app.post('/api/newLog', (req, res) => {
    db.collection('allLogs').insertOne(req.body), (err, result) => {
        if(err) return console.log(err)
        console.log('saved to logs')
        res.redirect('/')
    }
});

app.get('/api/logs', (req, res) => {
    db.collection('allLogs').find().toArray((err, allLogs) => {
        if(err) return console.log(err);
        const rowsOfLogs = {totalLogs: allLogs.length};
        res.json({_rowsOfLogs: rowsOfLogs, records: allLogs})
    })
})
