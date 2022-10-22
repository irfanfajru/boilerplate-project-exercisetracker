const {addExercise} = require('../models/exerciseModel');
const {getUserById} = require('../models/userModel');

const addExerciseHandler = (req,res)=>{
  const {_id} = req.params;
  let {description,duration,date} = req.body
  duration = parseInt(duration);
  if(date==null || date==undefined){
    date = new Date().toDateString();
  }else{  
  date = new Date(date).toDateString();
  }
  const user = getUserById(_id);
  const newExercise = {
    username:user.username,
    description,
    duration,
    date,
    _id
  }
  const createdExercise = addExercise(newExercise);
  res.json(createdExercise);
}

module.exports = {
  addExerciseHandler,
}