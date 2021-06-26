const {Router} = require('express');
const zeroRoutes = Router();
const path = require("path");

zeroRoutes.get('/hotstops', function(req, res){
    res.sendFile(path.join(__dirname, "../../public/mainZero.html"));
});
// zeroRoutes.get('/NewYorkZero.html', function(req, res){
//     res.sendFile(path.join(__dirname, "../../public/NewYorkZero.html"));
// });
module.exports = zeroRoutes;