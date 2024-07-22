document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    console.log("js");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username");
      const emailid = document.getElementById("emailId");

      console.log("Username:", username.value);
      console.log("emailid", emailid.value);
    });
  }
});

const username = document.getElementById("username");
const emailid = document.getElementById("emailId");
