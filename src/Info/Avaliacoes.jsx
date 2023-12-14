import React from "react";
import PropTypes from 'prop-types';
import perfil1 from "../assets/img/perfil1.png";
import perfil2 from "../assets/img/perfil2.png";
import perfil3 from "../assets/img/perfil3.png";

// add

const Avaliacoes = ({styles}) => {
  return (
    <div className={styles.containerConteudo}>
      <div className={styles.titulo}>
        <h1>Avaliações</h1>
        <p>Algumas avaliações dos nossos clientes</p>
      </div>

      <div className={styles.avaliacoes}>
        <div>
          <div className={styles.cabecalhoAvaliacoes}>
            <img src={perfil1} alt="foto" />
            <h2 className={styles.nome}>Carlos</h2>
            <span className={styles.nota}>9.5/10</span>
          </div>
          <p>
            As regatas tem um tecido ótimo e o caimento é perfeito pra jogar
            basquete :)
          </p>
        </div>
        <div>
          <div className={styles.cabecalhoAvaliacoes}>
            <img src={perfil2} alt="foto" />
            <h2 className={styles.nome}>Thomas</h2>
            <span className={styles.nota}>9/10</span>
          </div>
          <p>A bermuda é muito confortável, entrega foi rápida.</p>
        </div>
        <div>
          <div className={styles.cabecalhoAvaliacoes}>
            <img src={perfil3} alt="foto" />
            <h2 className={styles.nome}>Ítallo</h2>
            <span className={styles.nota}>10/10</span>
          </div>
          <p>
            Ja é a 5° vez que compro aqui na hooperstore e vem tudo perfeito!
            vou comprar mais ainda!
          </p>
        </div>
      </div>
    </div>
  );
};

Avaliacoes.propTypes = {
  styles: PropTypes.object,
};

export default Avaliacoes;
