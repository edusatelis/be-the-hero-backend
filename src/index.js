const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

/**
 * Rota  / Recurso
 * 
  * METODOS HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end

   * TIPOS DE PARAMETROS
   * 
   * Query Params: Parametros nomeados enviados na rota após o "?" (Filtros, Paginação)
   * Route Params: Paranetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição, utilizado pra criar ou alterar recursos
   * 
   */
app.use(cors());
app.use(express.json());
app.use(routes);
app.get('/',(req,res)=>{
    return res.json("API V0.1");
})
   
app.listen(3000, ()=>{
    console.log("Servidor executando na porta 30000");
})