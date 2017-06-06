const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

MongoClient.connect("mongodb://localhost", function(err, database){
  if(err){
    return console.log(err);
  }
  db = database;
  app.listen(8000, function(){
  console.log("Server started!");
  });
});

app.get('/all_assessments', (req, res) => {
  db.collection("assessments").find({}).toArray(function(err, data) {
    if (err) { res.status(500).send(err) }
    res.send(data)
  })
});

app.use((req, res, next) => {
  res.status(404).send("404 Error - File Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("500 Error - Server Error");
});
