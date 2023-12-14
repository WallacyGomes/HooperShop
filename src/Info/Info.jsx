import React from "react";
import Avaliacoes from "./Avaliacoes";
import Vantagens from "./Vantagens";
import styles from "./Info.module.css";

const Info = () => {

  return (
    <section className="container">
      <Avaliacoes styles={styles} />
      <Vantagens styles={styles} />
    </section>
  );
};

export default Info;
