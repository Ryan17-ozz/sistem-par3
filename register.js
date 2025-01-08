document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Selamat, Anda sudah mendaftar");

        window.location.href = "login.html";
    });
});