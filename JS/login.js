function login() {
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    
    if (userid === "admin" && password === "admin") {
        window.location.href = "Currency_converter.html";
    } else {
        alert("Error: Incorrect User ID or Password");
    }
}
function resetForm(){
    document.getElementById("userid").value="";
    document.getElementById("password").value="";
}

