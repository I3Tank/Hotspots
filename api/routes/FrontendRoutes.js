const {Router} = require('express');
const frontendRoutes = Router();
const path = require("path");

frontendRoutes.get('/shop', function(req, res, next) {
    console.log("shopreq");
    if (req.session.loggedin) {
        console.log("display Shop");
        res.send("shop");
        //location.replace('/shop.html');
        //res.redirect('/shop.html');
        //res.redirect("shop.html");

        //res.sendFile(path.join(__dirname, "../../public/shop.html"));
        // res.setHeader('content-type', 'shop.html');
        // res.redirect(path.join(__dirname, "../../public/shop.html"));

    } else {
        console.log("deny Shop");
    }
    //res.end();
});

// frontendRoutes.get('/', function(req, res){
//     //res.send("Main HTML");
//     //res.sendFile(path.join(__dirname, "../../public/main.html"));
//     //res.send(__dirname + "../../public/main.html");
// });

module.exports = frontendRoutes;