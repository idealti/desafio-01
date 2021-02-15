import React, { useState } from 'react';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const url = "http://mockbin.org/bin/fe7d0740-5cd7-4a45-ac0c-bdd770aadaee";
    const data = { name, email, msg };

    const handleData = event => {
        sendData(data, url);
        event.preventDefault();
    };
    
    async function sendData(data, url) {
        await fetch(url, {
            "mode": "no-cors",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "accept": "application/json",
                "content-type": "application/json"
            },
            "body": `{"nome":"${data.name}","email":"${data.email}","msg":"${data.msg}"}`
          })
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.error(err);
          });
    };

    return (

        <section className="main-form">
            <form className="form-container" onSubmit={handleData}>
                <h2 className="form__title">Fale conosco</h2>
                <p className="form__subtitle">Nome</p>
                <input className="form__input" type="text" placeholder="João da Silva" value={name} onInput={event => setName(event.target.value)} />
                <p className="form__subtitle">E-mail</p>
                <input className="form__input" type="text" placeholder="joao@suaempresa.com.br" value={email} onInput={event => setEmail(event.target.value)} />
                <p className="form__subtitle">Mensagem</p>
                <textarea className="form__input form__input--txt-area" placeholder="" type="text" value={msg} onChange={event => setMsg(event.target.value)}></textarea>
                <input className="form__input form__input--submit" type="submit" value="Enviar" />
            </form>
            <img className="form__image" alt="Balões de Conversação" src="./images/baloes.png" />
        </section>

    )
}