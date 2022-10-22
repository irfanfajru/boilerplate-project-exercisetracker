const {getUserById} = require('../models/userModel');
const {getExercisesByIdUser} = require('../models/exerciseModel');

// moment
const 
   Moment = require("moment"),
   MomentRange = require("moment-range"), 
   moment = MomentRange.extendMoment(Moment); /*add plugin to moment instance*/ 

const getUserLogHandler = (req,res)=>{
  const {_id} = req.params;
  const {from,to,limit} = req.query;
  console.log({from,to,limit});
  const user = getUserById(_id);
  const exercises = getExercisesByIdUser(_id);
  if(from==undefined && to==undefined && limit==undefined){  
  const log = {
    username:user.username,
    count:exercises.length,
    _id,
    log:exercises.map((e)=>({description:e.description,duration:e.duration,date:e.date})
  )};
  res.json(log);
  }else if(from!=undefined && to!=undefined){
    
    const filteredData = exercises.filter((e)=>Date.parse(e.date)>=Date.parse(from));
    res.json({
      username:user.username,
      count:filteredData.length,
      _id,
      log:filteredData.map((e)=>({
        description:e.description,duration:e.duration,date:e.date
      }))
    });
  }else if((from==undefined && to==undefined) && limit!=undefined){
    const limitedArray = exercises.slice(limit);
    res.json({
      username:user.username,
      count:limitedArray.length,
      _id,
      log:limitedArray.map((e)=>({
 description:e.description,duration:e.duration,date:e.date
      }))
    });
  }
}

module.exports = {
  getUserLogHandler,
}