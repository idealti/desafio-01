import { form } from "./addFormEvent.js";

const sucess = document.querySelector(".js-sucess");
const error = document.querySelector(".js-error");

function isStatusOk(status) {
  if (status) {
    showMessage(status);
    setInterval(() => {
      window.location.reload();
    }, 2000);
  } else {
    showMessage(status);
  }
}

function showMessage(status) {
  if (status) {
    sucess.style.display = "block";
    form.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

export default isStatusOk;
