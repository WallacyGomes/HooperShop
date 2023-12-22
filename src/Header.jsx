import React from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import Login from "./assets/svg/login.svg?react";
import Carrinho from "./assets/svg/carrinho.svg?react";
import Lupa from "./assets/svg/lupa.svg?react";
import Favoritar from "./assets/svg/favoritar.svg?react";
import { Link } from "react-router-dom";

// Pesquisar na API pelo search.
// Mostrar prévia no svg do carrinho de quantos itens foi adicionado no mesmo.

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const menuMobileRef = React.useRef();
  const [dropDownAtivo, setDropDownAtivo] = React.useState(false);
  const dropDownElement = React.useRef();

  const location = useLocation();

  //Fecha o dropDownMenu ao clicar fora do elemento.
  React.useEffect(() => {
    function clickFora({ target }) {
      if (target !== dropDownElement.current) {
        setDropDownAtivo(false);
      }
    }

    document.addEventListener("click", clickFora);
    return () => {
      document.removeEventListener("click", clickFora);
    };
  }, [dropDownAtivo]);

  // Fecha o menuMobile ao clicar em algum link.
  React.useEffect(() => {
    setMobile(false);
  }, [location]);

  //Remove menu ao ajustar a tela.
  React.useEffect(() => {
    const removerMenu = () => {
      if (window.innerWidth < 480) {
        setMobile(false);
      }
    };

    window.addEventListener("resize", removerMenu);

    return () => {
      window.removeEventListener("resize", removerMenu);
    };
  }, []);

  // Remove scroll ao abrir o menu.
  React.useEffect(() => {
    if(mobile) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [mobile]);



  return (
    <header>
      <div className={`${styles.content} container`}>
        <Link to="/">
          <h1>
            <span>Hooper</span>Shop
          </h1>
        </Link>
        <nav className={`${styles.nav}`}>
          <div
            ref={menuMobileRef}
            className={`${styles.menuNav} ${mobile ? styles.ativo : ""}`}
          >
            {mobile && (
              <button
                onClick={() => setMobile(false)}
                className={`${styles.menuBtn} btn`}
              >
                X
              </button>
            )}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                ref={dropDownElement}
                className={`${styles.comprar} ${
                  dropDownAtivo ? styles.ativo : ""
                }`}
                onClick={() => setDropDownAtivo(true)}
              >
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
          </div>
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
            <div
              onClick={() => setMobile(true)}
              className={styles.menuMobileContainer}
            >
              <button className={styles.menuMobile}></button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
