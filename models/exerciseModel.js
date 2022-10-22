const {nanoid} = require('nanoid');
const exerciseModel = [
  {
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
]

const addExercise = ({_id,username,description,duration,date})=>{
  const newData = {username,description,duration,date,_id};
  exerciseModel.push(newData);
  return newData;
}

const getExercisesByIdUser = (userId)=>{
  const exercises = exerciseModel.filter((e)=>e._id==userId);
  return exercises;
}

module.exports = {
  exerciseModel,
  addExercise,
  getExercisesByIdUser,
}