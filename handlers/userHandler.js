const {addUser,getUsers} = require('../models/userModel');

const addUserHandler = (req,res)=>{
  const createdUser = addUser(req.body.username);
  res.json(createdUser);
}

const getUsersHandler = (req,res)=>{
  res.json(getUsers());
}

module.exports = {
  addUserHandler,
  getUsersHandler
}