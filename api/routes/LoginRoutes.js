const {Router} = require('express');
const loginRoutes = Router();
const path = require("path");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const LoginController = require('../controllers/LoginController');

loginRoutes.post('/login', LoginController.login);
loginRoutes.get('/login', LoginController.checkLogin, function(req, res){
    console.log("loginreq");
    res.sendFile(path.join(__dirname, "../../public/logout.html"));
});
loginRoutes.delete('/deleteUser', function(req, res){
    console.log("deleting user...");
    LoginController.deleteUser(req.session.username);
    //res.sendFile(path.join(__dirname, "../../public/logout.html"));
    res.redirect(path.join(__dirname, "../../public/logout.html"))
    console.log("deleted user");
});
loginRoutes.put('/changePassword', jsonParser, function (req,res){
    LoginController.changePassword(req, res, req.session.username);
    console.log("changedPW");
});
loginRoutes.post('/register', LoginController.register);
loginRoutes.get('/logout', LoginController.logout);

module.exports = loginRoutes;