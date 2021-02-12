import React from "react";

import Cardd from "../components/Card";
import "./index.css";
import Containerr from "../components/Container";
import logo from "../assets/logo@3x.png";

export default function Home() {
  return (
    <div>
      <nav className='corlogo'>
        <div>
          <img src={logo} alt='logo' className='logo' />

          <button className='botao'>Inicio</button>
          <button>Sobre</button>
          <button>Serviços</button>
          <button>Contato</button>
        </div>
      </nav>
      <Cardd />

      <Containerr />
      <footer>
        <div className='footer'>© 2021 Guepardo Transportes</div>
      </footer>
    </div>
  );
}
