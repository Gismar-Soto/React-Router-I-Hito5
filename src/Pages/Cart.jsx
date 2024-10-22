import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

const Cart = () => {
  // Cargamos el carrito desde localStorage al inicializar el componente
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Estado para el total
  const [total, setTotal] = useState(0);

  // Función para calcular el total
  const calculateTotal = (cartItems) => {
    const newTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return newTotal;
  };

  // Efecto para actualizar el total cada vez que cambie el carrito
  useEffect(() => {
    const newTotal = calculateTotal(cart);
    setTotal(newTotal.toLocaleString('es-ES'));
  }, [cart]); // Se ejecuta cada vez que el carrito cambie

  // Función para sumar la cantidad de un producto
  const incrementQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardamos el carrito actualizado en localStorage
  };

  // Función para disminuir la cantidad de un producto
  const decrementQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardamos el carrito actualizado en localStorage
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardamos el carrito actualizado en localStorage
  };

  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="cart-item list-group-item d-flex justify-content-between align-items-center">
                <div className="cart-item-details d-flex align-items-center">
                  <img
                    src={item.image || item.img || 'https://via.placeholder.com/150'}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info ms-3">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1">Cantidad: {item.quantity}</p>
                    <p className="mb-1">Precio total: ${(item.price * item.quantity).toLocaleString('es-ES')}</p>
                    <div className="quantity-controls d-flex align-items-center mt-2">
                      <button onClick={() => decrementQuantity(item.id)} className="btn btn-secondary btn-sm">-</button>
                      <span className="quantity-display mx-2">{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)} className="btn btn-primary btn-sm">+</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm ms-3">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-end">
            <h4>Total a pagar: ${total}</h4> {/* Total ahora se actualiza automáticamente */}
            <button className="btn btn-success mt-2">
              <FontAwesomeIcon icon={faCreditCard} className="me-2" /> Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
