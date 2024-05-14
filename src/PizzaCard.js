import React, { useState } from 'react';
import './PizzaCard.css'

const PizzaCard = ({ photo, name, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const [diameter, setDiameter] = useState('Диаметр');

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrder = () => {
    alert(`Количество заказанного товара: ${quantity}, диаметр: ${diameter}`);
  };

  const handleDiameterChange = (e) => {
    setDiameter(parseInt(e.target.value));
  };

  return (
    <div className="pizza-card">
      <div className="hit-badge">Хит сезона</div>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="select-size">
        <select value={diameter} onChange={handleDiameterChange}>
          <option value="Диаметр" disabled>Диаметр</option>
          <option value={24}>24 см</option>
          <option value={38}>38 см</option>
        </select>
      </div>
      <div className="price">от {price} ₽</div>
      <div className="quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      <button className='order' onClick={handleOrder} disabled={diameter === 'Диаметр'}>🛒</button>
      </div>
    </div>
  );
};


export default PizzaCard;
