document.addEventListener("DOMContentLoaded", function (event) {
    function deleteUser() {
        fetch('http://localhost:3000/hotstops/deleteUser', {
            method: 'DELETE'
        })
    }
    function changePassword(newPw) {
        fetch('http://localhost:3000/hotstops/changePassword', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newPassword: newPw})
        })
    }
    this.deleteUserButton = document.getElementById("deleteButton");
    this.deleteUserButton.addEventListener("click", event => deleteUser());

    this.newPassword = document.getElementById("newPassword");
    this.newPasswordButton = document.getElementById("changePwBtn");
    this.newPasswordButton.addEventListener("click", event => changePassword(this.newPassword.value))

});