document.querySelector("form").addEventListener("submit", function (event) {
    const username = document.querySelector("[name='username']").value.trim();
    const password = document.querySelector("[name='password']").value.trim();
    if (username.length < 3 || password.length < 5) {
        event.preventDefault();
        alert("Nom d'utilisateur ou mot de passe trop court !");
    }
});
