const {Router} = require('express');
const loginRoutes = Router();

const LoginController = require('../controllers/LoginController');

//to use body-parser
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

loginRoutes.post('/login', jsonParser, LoginController.login);

module.exports = loginRoutes;