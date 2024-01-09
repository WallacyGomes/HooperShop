import React from "react";
import styles from "./ProdutosDestaque.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import useAcessarProdutos from "./CustomHooks/useAcessarProdutos";
import { Link } from "react-router-dom";

// Criar uma rota para um produto específico

const ProdutosHome = () => {
  const [numeroDeSlide, setNumeroDeSlide] = React.useState(3);

  const [listaProdutos, setListaProdutos] = useAcessarProdutos();

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setNumeroDeSlide(1);
      } else {
        setNumeroDeSlide(3);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`${styles.produtoContainer} container`}>
      <div className={styles.botoes}>
        <button className={`${styles.destaque} btn`}>Destaque</button>
        <button className={`${styles.novo} btn`}>Novo</button>
      </div>

      <div className={styles.produtosContainer}>
        <Swiper navigation slidesPerView={numeroDeSlide}>
          {listaProdutos
            .filter(
              ({ id }) =>
                id === 2 || id === 8 || id === 12 || id === 11 || id === 4
            )
            .map(
              ({
                id,
                nome,
                img,
                descricao,
                valor,
                categoria,
                desconto,
                favorito,
              }) => (
                <SwiperSlide className={styles.produtos} key={id}>
                  <div className={styles.produto}>
                    <img src={img} alt="" />
                    <h1>{nome}</h1>
                    <p className={styles.preco}>
                      R$ {valor.toFixed(2).toString().replace(".", ",")}{" "}
                      <span>{categoria === 'regata' ? `R$ ${(valor / 0.30).toFixed()}` : null}</span>
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>
    </section>
  );
};

export default ProdutosHome;
