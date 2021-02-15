import './Main.css';
import Form from './components/form-main.jsx'



function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="menu is-center">
          <h1 className="menu-brand">
            <span className="br-hide">Guepardo Transportes</span>
            <img className="menu-logo" src="./images/logo@3x.png" />
          </h1>
          <nav className="nav-container">
            <ul className="menu-nav">
              <li className="nav__item">
                <a className="nav__link nav__link--active" href="#">Início</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Sobre</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Serviços</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("images/banner.jpg")` }}>
          <div className="b-container is-center">
            <h2 className="b__title">Entregando cargas e sonhos</h2>
            <p className="b__text">Desde 1980 entregando cargas e fazemos pessoas e negócios sorrirem e se realizarem.</p>
          </div>
        </div>
      </header>

      <main className="main is-center">   {/* Cogitando alteração por bloco */}
        <section className="main-description">
          <div className="d-container">
            <h2 className="d__title">Entregar rápidas e eficientes</h2>
            <p className="d__text">Temos experiência na entrega de cargas para pessoas e empresas em tempos recorde para todo o Brasil.</p>
          </div>
          <img className="d__image" src="./images/relogio.png" />
        </section>

      
        <Form/>

      </main>
      <footer className="footer">
        <p className="footer__text">© 2021 Guepardo Transportes</p>
      </footer>
    </div>
  );
}

export default App;