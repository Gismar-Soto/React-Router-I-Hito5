import React, { useEffect, useState } from "react";
import { FaPizzaSlice, FaShoppingCart, FaEye } from "react-icons/fa"; // Importamos el ícono de pizza y otros íconos que ya usas

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState(() => {
    // Cargamos el carrito desde localStorage (si existe)
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Función para añadir pizzas al carrito
  const addToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      // Si la pizza ya está en el carrito, aumenta la cantidad
      const updatedCart = cart.map(item =>
        item.id === pizza.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardamos el carrito en localStorage
    } else {
      // Si la pizza no está en el carrito, la agregamos
      const updatedCart = [...cart, { ...pizza, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardamos el carrito en localStorage
    }
  };

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (pizzas.length === 0) {
    return <p>No se encontraron pizzas. Verifica la API.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <div className="pizza-card card">
              <img
                src={pizza.img || pizza.image}
                alt={pizza.name}
                className="pizza-img card-img-top"
              />
              <div className="card-body">
                <h5 className="pizza-title card-title">{pizza.name}</h5>
                <div className="pizza-ingredients">
                  <span className="pizza-ingredients-label">
                    <FaPizzaSlice className="pizza-icon" /> Ingredientes:
                  </span>
                  <ul className="pizza-ingredients-list list-unstyled">
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <p className="pizza-price">Precio: ${pizza.price.toLocaleString('es-ES')}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-secondary">
                    Ver Más <FaEye />
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={() => addToCart(pizza)}
                  >
                    Añadir <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
