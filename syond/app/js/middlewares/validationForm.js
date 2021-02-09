const validationForm = (contactForm) => {
    if (contactForm.name.value == '') {
        contactForm.name.classList.add("validation-error");

        return false, alert("Preencha o campo Nome.");
    } else {
        contactForm.name.classList.remove("validation-error");
    }

    if (contactForm.email.value == '') {
        contactForm.email.classList.add("validation-error");

        return false, alert("Preencha o campo Email.");
    } else {
        contactForm.email.classList.remove("validation-error");
    }

    if (contactForm.message.value == '') {
        contactForm.message.classList.add("validation-error");

        return false, alert("Preencha o campo Mensagem.");
    } else {
        contactForm.message.classList.remove("validation-error");
    }

    return true;
}

export default validationForm;