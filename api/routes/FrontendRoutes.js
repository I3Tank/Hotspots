const {Router} = require('express');
const frontendRoutes = Router();
const path = require("path");

frontendRoutes.get('/', function(req, res){
    //res.send("Main HTML");
    res.sendFile(path.join(__dirname, "../../public/main.html"));
    //res.send(__dirname + "../../public/main.html");
});

module.exports = frontendRoutes;