import React from 'react';
import PizzaCard from './PizzaCard';
import pizzaImage from './pizza.jpg';

const App = () => {
  return (
    <div className="app">
      <PizzaCard
        photo={pizzaImage}
        name="Пепперони"
        description="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла"
        price={550}
      />
      
    </div>
    
  );
};

export default App;
