import React, { useState } from 'react';
import '../css/form-main.css'

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [input, setInput] = useState({i0: 'form__input', i1: 'form__input', i2: 'form__input'});
    const url = "http://mockbin.org/bin/fe7d0740-5cd7-4a45-ac0c-bdd770aadaee";
    const data = { name, email, msg };
    
    console.log(data);

    const handleData = event => {
        if(data.name === "" || data.name === null || data.name === undefined){
            setInput({i0: 'form__input form__input--warning'})
        }else if (data.email === "" || data.name === null || data.name === undefined){
            setInput({i1: 'form__input form__input--warning'})
        }else if (data.msg == undefined || data.msg.length < 42){
            setInput({i2: 'form__input form__input--warning'})
        }else{
            sendData(data, url);
            event.preventDefault();
        }
    };
/*     const handleData = event => {
        console.log(event)
        console.log(event.target[0].id);
    }; */
    
    async function sendData(data, url) {
        await fetch(url, {
            "mode": "no-cors",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": `{"nome":"${data.name}","email":"${data.email}","msg":"${data.msg}"}`
          })
          .then(response => {
              //criar alert
            console.log(response);
          })
          .catch(err => {
              //criar alert
            console.error(err);
          });
    };

    return (

        <section className="main-form">
            <form className="form-container" onSubmit={handleData}>
                <h2 className="form__title">Fale conosco</h2>
                <p className="form__subtitle">Nome</p>
                <input className={input.i0} type="text" placeholder="João da Silva" id="input-name" value={name} onInput={event => setName(event.target.value)} />
                <p className="form__subtitle">E-mail</p>
                <input className={input.i1} type="text" placeholder="joao@suaempresa.com.br" value={email} onInput={event => setEmail(event.target.value)} />
                <p className="form__subtitle">Mensagem</p>
                <textarea className={input.i2} placeholder="" type="text" value={msg} onChange={event => setMsg(event.target.value)}></textarea>
                <input className="form__submit" type="submit" value="Enviar" />
            </form>
            <img className="form__image" alt="Balões de Conversação" src="./images/baloes.png" />
        </section>

    )
}