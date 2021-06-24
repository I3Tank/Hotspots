const {Router} = require('express');
const loginRoutes = Router();
const path = require("path");

const LoginController = require('../controllers/LoginController');

//to use body-parser
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// console.log("was anderes");
// loginRoutes.get('*', function (req, res) {
//     console.log("juhuu");
//     res.sendFile(path.join(__dirname, "../../main.html"));
// });

loginRoutes.post('/login', jsonParser, LoginController.login);



module.exports = loginRoutes;