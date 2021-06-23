const users = new Map();
let userID = 1;

// users.set(userID.toString(), {
//     username: "admin",
//     password: "admin123"
// })
// userID++;
users.set("mc", "mc123");

class LoginModel{
    static registerUser(username, password){
        users.set(username, password);
    }
    static isUserRegistered(username){
        return users.has(username);
    }
    static correctPassword(username, password){
        return users.get(username) === password;
    }
}

module.exports = LoginModel;