import sendEmail from "./sendEmail";

const form = document.querySelector("#contactForm");
const button = document.querySelector(".js-button");

function submitForm(e) {
  e.preventDefault();
  button.setAttribute("disabled", "true");
  button.innerHTML = "Enviando...";

  sendEmail();
}

form.addEventListener("submit", submitForm);

export { form };
