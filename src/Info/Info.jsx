import React from "react";
import styles from "./Info.module.css";
import Avaliacoes from "./Avaliacoes";
import Vantagens from "./Vantagens";

const Info = () => {
  return (
    <section className="container">
      <Avaliacoes styles={styles} />
      <Vantagens styles={styles} />
    </section>
  );
};

export default Info;
