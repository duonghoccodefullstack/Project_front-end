const passwordHide = document.querySelector("#password");
const icon_on = document.getElementById("on");
const icon_off = document.getElementById("off")
// const btnPassword = document.querySelector(".toggle-password");

// btnPassword.addEventListener("click", function () {
//     document.writeln("helo");
// });

function togglePasswordVisibility() {
  if (passwordHide.type === "password" ) {
      passwordHide.type = "text";
      icon_on.style.display = "none"
      icon_off.style.display = "block"
  }

}
function togglePasswordVisibility1() {
    if (passwordHide.type == "text") {
        passwordHide.type = "password";
        icon_off.style.display = "none";
        icon_on.style.display = "block"
    }
}
// const btnElement = document.getElementById("click");
// const idElement = document.getElementById("Password");

// btnElement.addEventListener('click', function () {
//     const check_type = idElement.getAttribute('type')
//     idElement.setAttribute('type',

//     )
// })

function Contact() {
    window.location = "https://www.facebook.com/profile.php?id=100054074258617"
}