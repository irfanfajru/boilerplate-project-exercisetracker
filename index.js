const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser');
// import handler user
const {addUserHandler,getUsersHandler} = require('./handlers/userHandler')

// import handler excercise
const {addExerciseHandler} = require('./handlers/exerciseHandler');

// import handler log
const {getUserLogHandler} = require('./handlers/logHandler');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// add user
app.post('/api/users',addUserHandler);
// get Users
app.get('/api/users',getUsersHandler);

// add excercise by id user
app.post('/api/users/:_id/exercises',addExerciseHandler);

// get user log
app.get('/api/users/:_id/logs',getUserLogHandler);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
