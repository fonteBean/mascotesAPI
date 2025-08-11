const db = require('../db/db');


async function create(mascote){
  try{
    const query= await db('mascotes').insert(mascote);
    if(!query){
      return false
    }   
    return true 
  }catch(err){
    console.log(err);
    return false;
  }
}

async function readAll(){
  try{
    const query = await db('mascotes').select('*');
    if(!query){
      return false;
    }
    return true;
  }catch(err){
    console.log(err);
    return false; 
  }
}

async function read(id){
  try{
    const query = await db('mascotes').where({id:id}).first();
    if(!query){
      return false;
    }
    return true;
  }catch(err){
    console.log(err);
    return false;
  }
}

async function del(id){
  try{
    const query = await db('mascotes').where({id:id}).del();
    if(!query){
      return false;
    }
    return true;
  }catch(err){
    console.log(err);
    return false;
  }
}

module.exports = {
  create,
  readAll,
  read,
  del
}