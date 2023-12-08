import React from "react";
import styles from "./Info.module.css";
import perfil1 from "./assets/img/perfil1.png";
import perfil2 from "./assets/img/perfil2.png";
import perfil3 from "./assets/img/perfil3.png";
import Suporte from "./assets/svg/suporte.svg?react";
import Envio from "./assets/svg/envio.svg?react";
import Reembolso from "./assets/svg/reembolso.svg?react";

const Info = () => {
  return (
    <section className="container">
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

        {/* <div className={styles.titulo}>
          <h1>Vantagens</h1>
          <p>Vantagens de comprar na HoopStore</p>
        </div> */}

        <div className={styles.vantagens}>
          <div>
            <div className={styles.conteudoVantagens}>
              <Suporte />
              <h2>Suporte Profissional</h2>
              <p>
                Equipe de suporte pronto para lhe atender e tirar suas dúvidas.
              </p>
            </div>
          </div>
          <div>
            <div className={styles.conteudoVantagens}>
              <Envio />
              <h2>Envio Imediato</h2>
              <p>
                Todos os produtos do site estão disponível para pronta entrega.
              </p>
            </div>
          </div>
          <div>
            <div className={styles.conteudoVantagens}>
              <Reembolso />
              <h2>Satisfação ou Reembolso</h2>
              <p>
                7 dias para trocar o produto ou pedir reembolso apartir da data
                de recebimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
