import isStatusOk from "./isStatusOk";

const URL = "http://mockbin.com/request?foo=bar&foo=baz";
const formValues = {
  name: "",
  email: "",
  message: "",
};

console.log("chamou sendEmail");

const formEl = document.forms.contactForm;
const formData = new FormData(formEl);

formValues.name = formData.get("name");
formValues.email = formData.get("email");
formValues.message = formData.get("message");

function sendEmail() {
  fetch(URL, {
    method: "POST",
    headers: {
      cookie: "foo=bar; bar=baz",
      "x-pretty-print": "2",
    },
    body: JSON.stringify(formValues),
  })
    .then((response) => {
      isStatusOk(response.ok);
    })
    .catch((err) => {
      isStatusOk(false);
      console.warn(err);
    });
}

export default sendEmail;
