import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.conteudoContainer}>
        <div className={styles.conteudo}>
          <h2>ATENDIMENTO AO CLIENTE</h2>
          <div className={styles.flex}>
            <h3>Email:</h3>
            <p>hoopershop@mail.com</p>
          </div>
          <div className={styles.flex}>
            <h3>Whatsapp:</h3>
            <p>(00) 000000-000</p>
          </div>
          
        </div>
        <div className={styles.conteudo}>
          <h2>INSTITUCIONAL</h2>
          <Link to='sobre/sobre-nos'>Sobre Nós</Link>
          <Link to='sobre/politicas-de-privacidade'>Politicas de Privacidade</Link>
          <Link to='sobre/termos-de-servico'>Termos de Serviço</Link>
          <Link to='sobre/suporte-e-atendimento'>Suporte e Atendimento</Link>
        </div>
        <div className={styles.conteudo}>
          <h2>REDES SOCIAIS</h2>
          <p>@hoopershop</p>
        </div>
      </div>
      <p className={styles.direito}>©️ HooperShop | Alguns Diretos Reservados.</p>
    </footer>
  )
}

export default Footer;