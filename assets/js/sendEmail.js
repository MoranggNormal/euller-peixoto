const emailjs = require('emailjs-com')

emailjs.init("user_jNBh3414Iz9HJlwjPGryn");

const form = document.querySelector(".contact-form");
const recruiterEmail = document.querySelector(".recruiter-email");
const recruiterMessage = document.querySelector(".recruiter-message");
const setError = document.querySelector(".contact-message-error");
const setSucess = document.querySelector(".contact-message-sucess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (recruiterEmail.value.length != 0 && recruiterMessage.value.length != 0) {

    emailjs.send("service_r10u1x6", "template_tbvsjp6", {
      from_name: recruiterEmail.value,
      to_name: "Euller",
      message: recruiterMessage.value,
      reply_to: "euller",
    });

    setSucess.style.display = "block";

    recruiterEmail.value = "";
    recruiterMessage.value = "";
    setError.style.display = "none";

    setTimeout(() => {
      setSucess.style.display = "none";
    }, 2000);

    return

  } 

  setError.style.display = "block";



});
