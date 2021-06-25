const {Router} = require('express');
const frontendRoutes = Router();
const path = require("path");
const LoginController = require('../controllers/LoginController');

frontendRoutes.get('/shop', LoginController.checkLogin, function(req, res, next) {
    console.log("shopreq");
    res.sendFile(path.join(__dirname, "../../public/shop.html"));
});

frontendRoutes.get('/hotstops', function(req, res){
    res.sendFile(path.join(__dirname, "../../public/main.html"));
});


module.exports = frontendRoutes;