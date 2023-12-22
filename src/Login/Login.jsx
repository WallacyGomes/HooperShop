import React from "react";
import "./estiloLogin.css";
import Cadastrar from "./Cadastrar";
import Entrar from "./Entrar";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [cadastrar, setCadastrar] = React.useState(true);

  const location = useLocation();

  React.useEffect(() => {
    const elementosRemovidos = ["header", "footer"];

    elementosRemovidos.forEach((elemento) => {
      if (location.pathname === "/login") {
        document.querySelector(elemento).style.display = "none";
      }
    });
    
    document.documentElement.style.overflow = 'hidden';
    

  }, [location]);

  return (
    <section className='containerLogin container'>
      {cadastrar ? (
        <Cadastrar setCadastrar={setCadastrar} />
      ) : (
        <Entrar setCadastrar={setCadastrar} />
      )}
    </section>
  );
};

export default Login;
