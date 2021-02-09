import api from "./services/api.js";
import clearInputsContactForm from "./utils/clearInputsContactForm.js";
import validationForm from "./middlewares/validationForm.js";

const formAction = () => {
    const contactForm = document.querySelector("#contact-form");

    async function handleContactForm(event) {
        event.preventDefault();

        try {
            const validationResponse = validationForm(contactForm);

            if (validationResponse) {
                const user = {
                    name: contactForm.name.value,
                    email: contactForm.email.value,
                    message: contactForm.message.value
                }

                try {
                    const apiResponse = await api(user);

                    if (apiResponse.status === 200) {
                        alert("Mensagem enviada com sucesso!");
                    } else {
                        alert("Erro ao enviar mensagem.");
                    }

                    clearInputsContactForm(contactForm);
                } catch (error) {
                    console.error(error);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    contactForm.addEventListener("submit", handleContactForm);
}

export default formAction;