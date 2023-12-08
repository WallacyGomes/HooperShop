import React from 'react';
import styles from './VerTodosProdutos.module.css';
import realhooper from './assets/img/realhooper.jpg';
import { Link } from 'react-router-dom';

const VerTodosProdutos = () => {
  return (
    <section className={`${styles.container} container`}>
      <div className={`${styles.containerConteudo}`}>
        <div className={`${styles.conteudo}`}>
          <h1>Tenha o estilo de um real hooper!</h1>
          <p>Roupas e acessórios estilosos para você utilizar no seu rachão do dia á dia!</p>
          <Link to='produtos' className='btn'>Ver produtos</Link>
        </div>
        <img src={realhooper} alt="IMAGEM" />
      </div>
    </section>
  )
}

export default VerTodosProdutos