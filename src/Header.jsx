import React from "react";
import styles from "./Header.module.css";
import Login from "./assets/svg/login.svg?react";
import Carrinho from "./assets/svg/carrinho.svg?react";
import Lupa from "./assets/svg/lupa.svg?react";
import Favoritar from "./assets/svg/favoritar.svg?react";
import { Link } from "react-router-dom";

// Pesquisar na API pelo search.
// Criar accordeon no "comprar".
// Ao clicar no svg de login abrir um accordeon com a opção de entrar ou registrar.
// Mostrar prévia no svg do carrinho de quantos itens foi adicionado no mesmo.

const Header = () => {
  const [dropDownAtivo, setDropDownAtivo] = React.useState(false);
  const dropDownElement = React.useRef();

  const dropDownMenu = () => {
    setDropDownAtivo(true);    
  }

  React.useEffect(() => {
    const html = document.documentElement;

    function clickFora({target}) {
      if(target !== dropDownElement.current) {
        setDropDownAtivo(false);
      }
    }

    html.addEventListener('click', clickFora);
    return () => {
      html.removeEventListener('click', clickFora);
    }
  }, [dropDownAtivo]);

  return (
    <header>
      <div className={`${styles.content} container`}>
        <Link to="/">
          <h1>
            <span>Hooper</span>Shop
          </h1>
        </Link>
        <nav className={`${styles.nav}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li ref={dropDownElement} className={`${styles.comprar} ${dropDownAtivo ? styles.ativo : ''}`} onClick={dropDownMenu}>
              Comprar
              <ul className={`${styles.dropdownMenu}`}>
                <li>
                  <Link to="produtos/regatas">Regatas</Link>
                </li>
                <li>
                  <Link to="produtos/bermudas">Bermudas</Link>
                </li>
                <li>
                  <Link to="produtos/acessorios">Acessorios</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          <form className={styles.search}>
            <input type="search" name="search" id="search" />
            <button>
              <Lupa />
            </button>
          </form>
          <div className={styles.btn}>
            <Link to="login">
              <Login />
            </Link>
            <Link to="favoritos">
              <Favoritar />
            </Link>
            <Link to="carrinho">
              <Carrinho />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
