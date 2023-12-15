import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types';
import Suporte from "../assets/svg/suporte.svg?react";
import Envio from "../assets/svg/envio.svg?react";
import Reembolso from "../assets/svg/reembolso.svg?react";

const Vantagens = ({ styles }) => {
  const [mobile, setMobile] = React.useState(3);

  React.useEffect(() => {

    const ativarMobile = () => {
      if (window.innerWidth < 480) {
        setMobile(1);
      } else {
        setMobile(3);
      }
    };

    ativarMobile();

    window.addEventListener("resize", ativarMobile);

    return () => {
      window.removeEventListener("resize", ativarMobile);
    };
  }, []);

  return (
    <Swiper slidesPerView={mobile} pagination={{ clickable: true }}>
      <div className={styles.vantagens}>
        <SwiperSlide>
          <div>
            <div className={styles.conteudoVantagens}>
              <Suporte />
              <h2>Suporte Profissional</h2>
              <p>
                Equipe de suporte pronto para lhe atender e tirar suas dúvidas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className={styles.conteudoVantagens}>
              <Envio />
              <h2>Envio Imediato</h2>
              <p>
                Todos os produtos do site estão disponível para pronta entrega.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </div>
    </Swiper>
  );

  
};

Vantagens.propTypes = {
  styles: PropTypes.object,
};

export default Vantagens;