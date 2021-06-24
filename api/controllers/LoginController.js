const LoginModel = require("../models/LoginModel");

class LoginController{
    static login(req, res){
        console.log("logging in...");
        let username = req.body.username;
        let password = req.body.password;

        if(username && password){
            console.log(username + password);
            if(LoginModel.isUserRegistered(username)){
                if(LoginModel.correctPassword(username, password)){
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/main.html');
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
}
module.exports = LoginController;