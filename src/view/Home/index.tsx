import React, { useState, useEffect } from 'react';

import { Container } from './style';


import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      })

  }, [])

  const handleCart = (index: number) => {
    const productStore = JSON.stringify(data[index]);
    localStorage.setItem(`@produto-${index}`, productStore)
  }

  return (
    <Container>
      <div>
        <h1>Produtos</h1>
        <h2>
        <a href="http://localhost:3000/clientes">Cadastro do cliente</a>
        </h2>
      </div>
      <section>
        {data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="monitor" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={ () => handleCart(index)}>Comprar</button>
          </div>
        ))}
      </section>
    </Container>
      )
}

export default Home;