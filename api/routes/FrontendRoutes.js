const {Router} = require('express');
const frontendRoutes = Router();
const path = require("path");
const LoginController = require('../controllers/LoginController');

frontendRoutes.get('/shop', LoginController.checkLogin, function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../public/shop.html"));
});

frontendRoutes.get('/main', function(req, res){
    res.sendFile(path.join(__dirname, "../../public/main.html"));
});


module.exports = frontendRoutes;