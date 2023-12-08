import React from 'react';
import Input from '../Form/Input';
import './estiloLogin.css';

const Cadastrar = ({setCadastrar}) => {
  

  return (
    <section>
      <div className='conteudoLogin'>
        <h1>Cadastre-se</h1>
        <form onSubmit={(event) => event.preventDefault()} className='loginForm'>
          <Input label='Nome' id='nome' type='text' />
          <Input label='Email' id='email' type='text' />
          <Input label='Senha' id='senha' type='password' />
          <button className='Loginbtn btn'>Entrar</button>
          <div className='recuperarSenha'>Ja possui uma conta? <button onClick={() => setCadastrar(false)}>Clique Aqui!</button></div>
        </form>
      </div>
    </section>
  )
}

export default Cadastrar