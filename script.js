/* ===========================================================
   SMOOTH SCROLL FOR NAVIGATION LINKS
   =========================================================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

/* ===========================================================
   UPDATE FOOTER YEAR
   =========================================================== */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* ===========================================================
   LOGIN / REGISTER SYSTEM
   =========================================================== */
function showRegister() {
    document.querySelector(".login-box").classList.add("hidden");
    document.querySelector(".register-box").classList.remove("hidden");
}

function showLogin() {
    document.querySelector(".register-box").classList.add("hidden");
    document.querySelector(".login-box").classList.remove("hidden");
}

function register() {
    const user = document.getElementById("reg-username").value;
    const pass = document.getElementById("reg-password").value;

    if (!user || !pass) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    localStorage.setItem("rania_user", user);
    localStorage.setItem("rania_pass", pass);

    alert("Compte créé avec succès !");
    showLogin();
}

function login() {
    const user = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;

    if (
        user === localStorage.getItem("rania_user") &&
        pass === localStorage.getItem("rania_pass")
    ) {
        alert("Connexion réussie !");
        window.location.href = "index.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
}
