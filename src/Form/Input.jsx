import React from 'react';
import styles from './Input.module.css';

const Form = ({label, id, type, ...props }) => {


  return (
    <div className={styles.containerForm}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </div>
  )
}

export default Form