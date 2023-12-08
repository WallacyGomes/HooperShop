import React from 'react';
import Input from '../Form/Input';
import './estiloLogin.css';

const Entrar = ({setCadastrar}) => {

  return (
    <section>
      <div className='conteudoLogin'>
        <h1>Entrar</h1>
        <form onSubmit={(event) => event.preventDefault()} className='loginForm'>
          <Input label='Nome' id='nome' type='text' />
          <Input label='Senha' id='senha' type='password' />
          <button className='Loginbtn btn'>Entrar</button>
          <div className='recuperarSenha'>Deseja se cadastrar? <button onClick={() => setCadastrar(true)}>Clique Aqui!</button></div>
        </form>
      </div>
    </section>
  )
}

export default Entrar