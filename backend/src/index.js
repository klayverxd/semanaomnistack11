const express =require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());  //antes de todas as requisições, o express vai no corpo da requisição e transforma o json em algo entendível para o js

app.use(routes); 
/**
 * Rota / Recurso
 * 
 * Recurso é uma parte da rota, alguma busca
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar um informação no back-end
 */

 /**
  * Navegador utilixa apenas o método GET, daí vem o Insomnia
  * Que serve para testar rotas com outros métodos
  */

/** 
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?"; (filtros, paginação) Ex.: /users?page=2&name=klayver
 * Route Params: Parâmetros utilizados para identirficar recursos (Sempre depois da barra, no caso foi informado o id, com ":" antes) Ex.: /users/:id
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos (Nome, email, ...) 
 */

 /**
  * Instalação do nodemon para manter o js sempre executando sem precisar ficar dando node, apenas com "npm start"
  */

 /**
  * SQL: MySQL, SQLite, PosrgreSQL, Oracle, Microsoft SQL Server
  * (Não relacionais, não estruturado) NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Comunicação com o banco de dados
   * Driver: SELECT * FROM users       "*" -> todo
   * (utilizamos esse) Query Builder: table('users').select('*').where()
   */

app.listen(3333);