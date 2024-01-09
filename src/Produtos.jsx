import React from 'react';
import useAcessarProdutos from './CustomHooks/useAcessarProdutos';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';


const Produtos = () => {

  const [listaProdutos, setListaProdutos] = useAcessarProdutos();
  console.log(listaProdutos)

  

  return (
    <section className={`${styles.container} container`}>
      <h1>O que você deseja comprar?</h1>
      <div className={styles.flex}>
        {listaProdutos.filter(({id}) => id === 2 || id === 3 || id === 8).map(({id, nome, img, descricao, valor, categoria, desconto, favorito}) =>
          <div key={id}>
          <Link to={`${categoria}`}>
            <img src={img} alt="" />
            <h1>{categoria}</h1>
          </Link>
          </div>
        )}
      </div>
      

      {/* {listaProdutos.map(({id, nome, img, descricao, valor, categoria, desconto, favorito}) =>
        <div key={id}>
          
        </div>
      )} */}
    </section>
  )
}

export default Produtos;