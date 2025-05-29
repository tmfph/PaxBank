document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.querySelector("[name='username']").value.trim();
    const password = document.querySelector("[name='password']").value.trim();

    const response = await fetch("/auth", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();
    if (result.success) {
        sessionStorage.setItem("username", username);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMessage").innerText = "Échec de connexion !";
    }
});
