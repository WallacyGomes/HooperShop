import React from "react";
import Banner from "./Banner";
import ProdutosHome from "./ProdutosHome";
import VerTodosProdutos from "./VerTodosProdutos";
import Info from "./Info/Info";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  React.useEffect(() => {
    const elementosRemovidos = ["header", "footer"];

    elementosRemovidos.forEach((elemento) => {
      if (location.pathname !== "/login") {
        document.querySelector(elemento).style.display = "block";
      }
    });

    document.documentElement.style.overflow = 'auto';

  }, [location]);

  return (
    <>
      <Banner />
      <ProdutosHome />
      <VerTodosProdutos />
      <Info />
    </>
  );
};

export default Home;
