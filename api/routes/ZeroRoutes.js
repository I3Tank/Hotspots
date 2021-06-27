const {Router} = require('express');
const zeroRoutes = Router();
const path = require("path");

zeroRoutes.get('/main', function(req, res){
    res.sendFile(path.join(__dirname, "../../public/zero/mainZero.html"));
});
// zeroRoutes.get('/NewYorkZero.html', function(req, res){
//     res.sendFile(path.join(__dirname, "../../public/NewYorkZero.html"));
// });


module.exports = zeroRoutes;