const fs = require('fs');
const express = require('express');
const app = express();
const mongodb = require('mongodb');


// global db connection
// We can get away with this being global because we don't start the server listening until we've set the value of this in the mongo connect callback.
var db;

// Connect to mongo (make sure mongo is running!)
mongodb.MongoClient.connect('mongodb://localhost', function(err, database) {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Connected to Database");
	db = database;

	// now, start the server.
	startListening();
});

// start listening (but only after we've connected to the db!)
function startListening() {
  app.listen(8005, () => {
    console.log('server started');
  })
}

let getAssessmentsFromFile = new Promise((resolve, reject) => {
  fs.readFile('./Assessments.md', (err, data) => {
    if(err) {
      reject(err);
    }
    let assessments = data.toString();
    resolve(assessments);
  })
})

app.get('/all_assessments', (req, res) => {
  db.collection('assessments').find({}).toArray((err, data) => {
    if (err) {
      res.status(500).send(err); 
      return; 
    }
    res.status(200).send(data)
  })
})

app.get('/assessments', (req, res) => {

  getAssessmentsFromFile.then((data) => {
    let assessments = data.split('----');
    let jsonAssessments = [];
    for (let assessment of assessments) {
      let tags = JSON.parse(assessment.split('****')[0].trim());
      let question = assessment.split('****')[1];
      let answer = assessment.split('****')[2];
      jsonAssessments.push({tags, question, answer})
    }

    db.collection('assessments').insertMany(jsonAssessments, (err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(data)
      res.send('success');
    });
  })
})


