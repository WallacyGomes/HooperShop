import React from "react";
import styles from "./ProdutosHome.module.css";
import armsleeve from "./assets/img/armsleevePreview.jpg";
import atlanta from "./assets/img/regataAtlantaPreview.jpg";
import boston from "./assets/img/regataBostonPreview.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Criar uma rota para um produto específico

const ProdutosHome = () => {
  const [numeroDeSlide, setNumeroDeSlide] = React.useState(3);

  React.useEffect(() => {
    
    function handleResize() {
      if(window.innerWidth < 480) {
        setNumeroDeSlide(1);
      } else {
        setNumeroDeSlide(3);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  return (
    <section className={`${styles.produtoContainer} container`}>
      <div className={styles.botoes}>
        <button className={`${styles.destaque} btn`}>Destaque</button>
        <button className={`${styles.novo} btn`}>Novo</button>
      </div>

      <div className={styles.produtosContainer}>
        <Swiper navigation slidesPerView={numeroDeSlide}>
          <SwiperSlide className={styles.produtos}>
            <div className={styles.produto}>
              <img src={armsleeve} alt="Arm Sleeve com logo da Nike" />
              <h1>Arm Sleeve Da Nike</h1>
              <p className={styles.preco}>R$ 69,90</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.produtos}>
            <div className={styles.produto}>
              <img src={atlanta} alt="Arm Sleeve com logo da Nike" />
              <h1>Regata Nike Atlanta Hawks Statement Edition 2019/20 Swingman</h1>
              <p className={styles.preco}>R$ 229,99 <span>R$ 328,55</span></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.produtos}>
            <div className={styles.produto}>
              <img src={boston} alt="Arm Sleeve com logo da Nike" />
              <h1>Regata Nike Boston Celtics Icon Edition 2022/23 Swingman</h1>
              <p className={styles.preco}>R$ 240 <span>R$ 342,85</span></p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className={styles.produtos}>
            <div className={styles.produto}>
              <img src={armsleeve} alt="Arm Sleeve com logo da Nike" />
              <h1>Arm Sleeve Da Nike</h1>
              <p className={styles.preco}>R$ 69,90</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.produtos}>
            <div className={styles.produto}>
              <img src={atlanta} alt="Arm Sleeve com logo da Nike" />
              <h1>Regata Nike Atlanta Hawks Statement Edition 2019/20 Swingman</h1>
              <p className={styles.preco}>R$ 229,99 <span>R$ 328,55</span></p>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>

      {/* <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={voltar}> {"<"} </button>
        <button className={styles.btn} onClick={avancar}>
          {" "}
          {">"}{" "}
        </button>
      </div> */}
    </section>
  );
};

export default ProdutosHome;
