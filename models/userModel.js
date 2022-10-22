const {nanoid} = require('nanoid');
const userModel = [
  {
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
]

// method get user
const getUsers = ()=>{
  return userModel;
}

const getUserById = (userId)=>{
  return userModel.find((val)=>val['_id']==userId)
}

const addUser = (username)=>{
  const newUser = {username,_id:nanoid()};
  userModel.push(newUser);
  return newUser;
}
module.exports = {
  userModel,
  getUsers,
  getUserById,
  addUser,
}