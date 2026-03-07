document.getElementById("btn-signin").addEventListener("click", function () {
  //get username & pass
  const inputUsername = document.getElementById("input-text").value;
  const inputPassword = document.getElementById("input-password").value;
  if (inputUsername === "admin" && inputPassword === "admin123") {
    alert("Login Sucessfull");
    window.location.assign("home.html");
  } else {
    alert("Login failed");
    return;
  }
});
