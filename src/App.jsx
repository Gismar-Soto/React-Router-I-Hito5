import React, { useState } from 'react';
// import CardPizza from './components/CardPizza'; // 
import Pizza from './components/Pizza';
import Home from './components/Home';
import Cart from './components/Cart'; 
import pizzas from './components/Pizzas';  
import Navbar from './components/Navbar';  
import Header from './components/Header';  
import Footer from './components/Footer';  

const App = () => {
  const [cart, setCart] = useState([]);  // Estado del carrito de compras

  // Función para añadir pizzas al carrito
  const addToCart = (pizzaId) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((pizza) => pizza.id === pizzaId);
      if (pizzaInCart) {
        return prevCart.map((pizza) =>
          pizza.id === pizzaId ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        );
      } else {
        const pizzaToAdd = pizzas.find((pizza) => pizza.id === pizzaId);
        return [...prevCart, { ...pizzaToAdd, quantity: 1 }];
      }
    });
  };

  // Función para remover pizzas del carrito
  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((pizza) => pizza.id === pizzaId);
      if (pizzaInCart.quantity === 1) {
        // Si la cantidad es 0, elimina la pizza del carrito
        return prevCart.filter((pizza) => pizza.id !== pizzaId);
      } else {
        // Si la cantidad es mayor a 1, resta 1 a la cantidad
        return prevCart.map((pizza) =>
          pizza.id === pizzaId ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        );
      }
    });
  };

  // Calcular el monto total del carrito
  const totalAmount = cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);

  return (
    <div>
      <Navbar totalAmount={totalAmount} /> 
      <Header />
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              {/* 
              <CardPizza 
                pizza={pizza} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
              /> 
              */}
            </div>
          ))}
        </div>
      </div>

      {/* Carrito de compras */}
      <Cart cart={cart} incrementQuantity={addToCart} decrementQuantity={removeFromCart} />
     <Home/>
      <Footer />
    </div>
  );
};

export default App;
