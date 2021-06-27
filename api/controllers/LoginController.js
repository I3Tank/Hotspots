const LoginModel = require("../models/LoginModel");

class LoginController{
    static login(req, res){
        console.log("logging in...");
        let username = req.body.username;
        // let password = req.body.password;
        let password = req.body.password;
        console.log(username);
        console.log(password);

        if(username && password){
            console.log(username + password);
            if(LoginModel.isUserRegistered(username)){
                if(LoginModel.correctPassword(username, password)){
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/hotstops/main.html');
                }
                else {
                    console.log("wrong pw");
                    res.send('Wrong password!');
                }
            }
            else {
                res.send('Register first please.');
            }
            res.end();
        }
        res.end();
    }
    static register(req, res){
        let username = req.body.username;
        let password = req.body.password;

        if(LoginModel.registerUser(username, password)){
            res.redirect('/hotstops/login.html');
        }
        else{
            res.send("User already exists!");
        }
    }
    static checkLogin(req, res, next) {
        if (req.session.loggedin) {
            console.log("display Shop");
            next();

        } else {
            console.log("deny Shop");
            res.redirect("/hotstops/login.html");
            next();
        }
    }
    static logout(req, res){
        if(req.session.loggedin){
            req.session.destroy();
            res.redirect('/hotstops/main.html');
        }else{
            res.send('Login first!');
        }
        res.end();
    }
}
module.exports = LoginController;