const express = require('express');
const app = express();
const routes = require('./routes/mascotesRouter');
require('dotenv').config();
const PORT = process.env.API_PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`);
})

