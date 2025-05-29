document.querySelector("form[action='/login']").addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch("/login", { method: "POST", body: formData });
    const result = await response.text();
    
    if (result.includes("Connexion réussie")) {
        sessionStorage.setItem("username", formData.get("username"));
        window.location.href = "dashboard.html";
    } else {
        alert("Échec de connexion !");
    }
});
