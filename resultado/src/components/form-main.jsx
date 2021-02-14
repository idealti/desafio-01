import reactDom from "react-dom";
import React, { useState } from 'react';

export default function Form() {

    // const [data, setData] = useState(null);

    function handleData (event) {

        console.log(event + " Oi")
    }

    return (

        <section className="main-form">
            <form className="form-container" onSubmit={handleData()}>
                <h2 className="form__title">Fale conosco</h2>
                <p className="form__subtitle">Nome</p>
                <input className="form__input" type="text" placeholder="João da Silva" />
                <p className="form__subtitle">E-mail</p>
                <input className="form__input" type="text" placeholder="joao@suaempresa.com.br" />
                <p className="form__subtitle">Mensagem</p>
                <textarea className="form__input form__input--txt-area" placeholder="" type="text"></textarea>
                <button className="form__input form__input--submit" type="submit" value="Enviar" />
            </form>
            <img className="form__image" src="./images/baloes.png" />
        </section>

    )
}