const users = new Map();

users.set("mc", "mc123");

class LoginModel{
    static registerUser(username, password){
        if(!this.isUserRegistered(username)){
            users.set(username, password);
            return true;
        }else{
            return false;
        }
    }
    static isUserRegistered(username){
        return users.has(username);
    }
    static correctPassword(username, password){
        return users.get(username) === password;
    }
    static deleteUser(username) {
        return users.delete(username);
    }
    static changePassword(user, newPassword){
        return users.set(user, newPassword);
    }
}

module.exports = LoginModel;