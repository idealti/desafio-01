import React from 'react';
import '../css/alert.css'

export default function Alert(props) {

    return (

        <div className="alert">
            <p className="alert__title">Aviso</p>
            <p className="alert__text">Erro em {}</p>
            <button className="alert__button">Ok</button>
        </div>

    )
}