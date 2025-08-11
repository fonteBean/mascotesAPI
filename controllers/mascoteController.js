const express = require('express');
const mascoteRepository = require('../repositories/mascotesRepository');
const errorHandler =require('../utils/errorHandler')

async function create(req,res)
{
    try{
      const {nome,time} = req.body;
      if(!nome || !time){
        return errorHandler(res,400,"Nome ou time não encontrados");
      }
      const novoMascote = {
        nome: nome,
        time: time
      }
      const query = await mascoteRepository(novoMascote);
      if(!query){
        return errorHandler(res,500,'Erro interno ao criar mascote');
      }

      return res.status(201).json(novoMascote);
    }catch(err){
      return errorHandler(res,401, "Erro ao criar mascote");
    }
}

async function readAll(req,res){
  try{
    const mascotes = await mascoteRepository.readAll();
    if(!mascotes){
      return errorHandler(res,500,"Erro interno");
    }
    return res.status(200).json(mascotes);
  }catch(err){
    return errorHandler(res,401,"Erro ao buscar mascotes");
  }
}
async function read(req,res){
  try{
    const id = req.params.id;
    const mascote = await mascoteRepository.read(id);
    if(!mascote){
      return errorHandler(res,500,"Erro interno");
    }
    return res.status(200).json(mascote);
  }catch(err){
    return errorHandler(res,401,`Erro ao buscar mascore de id ${id}`);
  }
}

async function del(req,res) {
    try{
    const id = req.params.id;
    const mascote = await mascoteRepository.del(id);
    if(!mascote){
      return errorHandler(res,500,"Erro interno");
    }
    return res.status(204);
  }catch(err){
    return errorHandler(res,401,`Erro ao apagar mascore de id ${id}`);
  }
}

module.exports = {
  create,
  readAll,
  read,
  del
}