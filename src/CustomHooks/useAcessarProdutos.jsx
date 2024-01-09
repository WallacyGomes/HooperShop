import React from 'react';
import armsleeveBranca from '../assets/img/produtos/armsleeve-branca.jpg';
import armsleeveNike from '../assets/img/produtos/armsleeve-nike.jpg';
import bermudaKnicks from '../assets/img/produtos/bermuda-knicks.png';
import bermudaLakers from '../assets/img/produtos/bermuda-lakers.jpg';
import bermudaNike from '../assets/img/produtos/bermuda-nike.jpg';
import headBandNba from '../assets/img/produtos/headband-nba.jpg';
import pulseiraLakers from '../assets/img/produtos/pulseira-lakers.jpg';
import regataAtlanta from '../assets/img/produtos/regata-atlanta.jpg';
import regataBulls from '../assets/img/produtos/regata-bulls.jpg';
import regataPreta from '../assets/img/produtos/regata-preta.jpg';
import regataCaneladaCinza from '../assets/img/produtos/regata-canelada-cinza.jpg';
import regataCeltics from '../assets/img/produtos/regata-celtics.jpg';


const useAcessarProdutos = () => {

  const [listaProdutos, setListaProdutos] = React.useState(() => [
    {
      id: 1,
      nome: 'Arm Sleeve Branca Básica',
      img: armsleeveBranca,
      descricao: 'Também conhecido como manguito, possui compressão e um tecido leve.',
      valor: 49.90,
      categoria: 'acessorio',
      desconto: false,
      favorito: false,
    },
    {
      id: 2,
      nome: 'Arm Sleeve Da Nike',
      img: armsleeveNike,
      descricao: 'Possui tecido Dri-FIT que acelera a evaporação para minimizar a retenção de suor.',
      valor: 69.90,
      categoria: 'acessorio',
      desconto: false,
      favorito: false,
    },
    {
      id: 3,
      nome: 'Bermuda do New York Knicks NBA',
      img: bermudaKnicks,
      descricao: 'Bermuda Nike NBA Masculino Swingman apresenta tecido duplo, que absorve o suor e bolsos laterais para armazenamento de fácil acesso.',
      valor: 178.99,
      categoria: 'bermuda',
      desconto: false,
      favorito: false,
    },
    {
      id: 4,
      nome: 'Bermuda Los Angeles Lakers',
      img: bermudaLakers,
      descricao: 'Bermuda Nike NBA Masculino Swingman apresenta tecido duplo, que absorve o suor e bolsos laterais para armazenamento de fácil acesso.',
      valor: 178.99,
      categoria: 'bermuda',
      desconto: false,
      favorito: false,
    },
    {
      id: 5,
      nome: 'Bermuda Nike Dri-Fit 6.0',
      img: bermudaNike,
      descricao: 'A bermuda Nike Dri-FIT ajuda você a se manter fresco e seco com tecido ventilado feito com fibras de poliéster 100% reciclado.',
      valor: 129.99,
      categoria: 'bermuda',
      desconto: false,
      favorito: false,
    },
    {
      id: 6,
      nome: 'NBA Elite Headband - Adulto',
      img: headBandNba,
      descricao: 'Eleve seu estilo para outro nível com essa testeira da nba.',
      valor: 75.50,
      categoria: 'acessorio',
      desconto: false,
      favorito: false,
    },
    {
      id: 7,
      nome: 'Pulseira de silicone NBA Los Angeles Lakers',
      img: pulseiraLakers,
      descricao: 'Eleve seu estilo para outro nível com essa pulseira de silicone resistente da nba.',
      valor: 25,
      categoria: 'acessorio',
      desconto: false,
      favorito: false,
    },
    {
      id: 8,
      nome: 'Regata Nike Atlanta Hawks Statement Edition 2019/20 Swingman',
      img: regataAtlanta,
      descricao: 'Apresenta tecido que absorve o suor com detalhes de design que demonstram o seu amor pelo jogo.',
      valor: 229.99,
      categoria: 'regata',
      desconto: 0.30,
      favorito: false,
    },
    {
      id: 9,
      nome: 'Regata Nike Chicago Bulls Icon Edition 2022/23',
      img: regataBulls,
      descricao: 'Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seca e confortável.',
      valor: 240,
      categoria: 'regata',
      desconto: 0.30,
      favorito: false,
    },
    {
      id: 10,
      nome: 'Regata Canelada Cinza',
      img: regataCaneladaCinza,
      descricao: 'Regata que molda ao corpo, sem perder o toque macio e o conforto.',
      valor: 69.90,
      categoria: 'regata',
      desconto: 0.30,
      favorito: false,
    },
    {
      id: 11,
      nome: 'Regata Nike Boston Celtics Icon Edition 2022/23 Swingman',
      img: regataCeltics,
      descricao: 'Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.',
      valor: 240,
      categoria: 'regata',
      desconto: 0.30,
      favorito: false,
    },
    {
      id: 12,
      nome: 'Regata Preta Básica',
      img: regataPreta,
      descricao: 'Regata que molda ao corpo, sem perder o toque macio e o conforto.',
      valor: 49.90,
      categoria: 'regata',
      desconto: 0.30,
      favorito: false,
    },
  ])

  

  return [listaProdutos, setListaProdutos];
};

export default useAcessarProdutos;