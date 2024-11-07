function login() {
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    
    if (userid === "admin" && password === "admin") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("currency-converter-container").style.display = "block";
    } else {
        alert("Error: Incorrect User ID or Password");
    }
}