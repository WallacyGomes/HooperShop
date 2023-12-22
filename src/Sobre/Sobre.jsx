import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from './Sobre.module.css';
import SobreNos from "./SobreNos";
import PoliticasDePrivacidade from "./PoliticasDePrivacidade";
import TermosDeServico from "./TermosDeServico";
import SuporteEAtendimento from "./SuporteEAtendimento";

const Sobre = () => {
  const params = useParams();
  const [animar, setAnimar] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setAnimar(true);
    const time = setTimeout(() => {
      setAnimar(false);
    }, 2000);
    
    return () => {
      clearTimeout(time);
    }
  }, [location])

  return (
    <section className={`${styles.sectionContainer}`}>
      {(params.id === "sobre-nos" && <SobreNos></SobreNos>) ||
        (params.id === "politicas-de-privacidade" && (
          <PoliticasDePrivacidade></PoliticasDePrivacidade>
        )) ||
        (params.id === "termos-de-servico" && (
          <TermosDeServico></TermosDeServico>
        )) ||
        (params.id === "suporte-e-atendimento" && (
          <SuporteEAtendimento></SuporteEAtendimento>
        ))}
    </section>
  );
};

export default Sobre;
