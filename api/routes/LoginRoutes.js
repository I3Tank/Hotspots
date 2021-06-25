const {Router} = require('express');
const loginRoutes = Router();
const path = require("path");


const LoginController = require('../controllers/LoginController');

loginRoutes.post('/login', LoginController.login);
loginRoutes.get('/login', LoginController.checkLogin, function(req, res){
    console.log("loginreq");
    res.sendFile(path.join(__dirname, "../../public/logout.html"));
});
loginRoutes.post('/register', LoginController.register);
loginRoutes.get('/logout', LoginController.logout);

module.exports = loginRoutes;