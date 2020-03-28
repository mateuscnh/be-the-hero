/**
 * Métodos HTTP
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o símbolo de interrogação e
  * e geralmente servem (filtros, paginação)
  * Route Params: Identifica recursos
  * Request Body: Corpo da requisição
  */

/**
* SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

const express = require('express'); //importando o módulo express
const routes = require('./routes');
const {errors} = require('celebrate');
const cors = require('cors');

const app = express(); // instanciar a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333); // ouvir a porta 3333, quando acessar localhost:3333, abre a aplicação
