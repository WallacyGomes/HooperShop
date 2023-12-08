import React from 'react';
import styles from './Banner.module.css';
import banner from './assets/img/banner.png';

const Banner = () => {
  return (
    <section className={`${styles.containerBanner} container`}>
      <a href="">
        <img className={styles.fundoImg} src={banner} alt="" />
      </a>
      
    </section>
  )
}

export default Banner;