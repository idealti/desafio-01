import React, { useState, useEffect } from 'react';
import Alert from './alert.jsx';
import '../css/form-main.css'

export default function Form() {

    const [name, setName] = useState({value: '', changed: false});
    const [email, setEmail] = useState({value: '', changed: false});
    const [msg, setMsg] = useState({value: '', changed: false});
    const [inputName, setInputName] = useState('form__input');
    const [inputEmail, setInputEmail] = useState('form__input');
    const [inputMsg, setInputMsg] = useState('form__input');
    const [error, setError] = useState({level: '', value: '', isError: false})
    const mockbin = '5b539c91-3d80-4be1-811c-ead0f3fccffb';
    const url = `http://mockbin.org/bin/${mockbin}`;
    const data = { name: name.value, email: email.value, msg: msg.value };

    function validateEmail(email) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    const handleData = event => {
        if(!name.value || !email.value || !msg.value)
        {
            alert('Verificar campo de texto ausente')
            setError({level: "Aviso", value: "Campo de texto em branco.", isError: true})
        }
        else
        {
            if(validateEmail(email.value)){
                sendData(data, url);
                event.preventDefault();
            }else{

                setError({level: "Aviso", value: "E-mail inválido.", isError: true})
            }

        }
    };
    useEffect(() => {
        if (!name.value && name.changed)
            setInputName( 'form__input form__input--warning' )
        else
            setInputName( 'form__input' )
    }, [name]);
    
    useEffect(() => {
        if (!email.value && email.changed)
            setInputEmail( 'form__input form__input--warning' )
        else
            setInputEmail( 'form__input' )
    }, [email]);
    useEffect(() => {
        if (!msg.value && msg.changed)
            setInputMsg( 'form__input form__input--warning' )
        else
            setInputMsg( 'form__input' )
    }, [msg]);

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
    function solveError(){
        setError({isError: false})
    }

    return (

        <section className="main-form">
            {error.isError ? <Alert toggle={solveError()}/> : null}
            <form className="form-container" onSubmit={handleData}>
                <h2 className="form__title">Fale conosco</h2>
                <p className="form__subtitle">Nome</p>
                <input className={inputName} type="text" placeholder="João da Silva" id="input-name" value={name.value} onInput={event => setName({value: event.target.value, changed: true})} />
                <p className="form__subtitle">E-mail</p>
                <input className={inputEmail} type="text" placeholder="joao@suaempresa.com.br" value={email.value} onInput={event => setEmail({value: event.target.value, changed: true})} />
                <p className="form__subtitle">Mensagem</p>
                <textarea className={inputMsg} placeholder="" type="text" value={msg.value} onChange={event => setMsg({value: event.target.value, changed: true})}></textarea>
                <input valorbonito="123" className="form__submit" type="submit" value="Enviar" />
            </form>
            <img className="form__image" alt="Balões de Conversação" src="./images/baloes.png" />
        </section>

    )
}