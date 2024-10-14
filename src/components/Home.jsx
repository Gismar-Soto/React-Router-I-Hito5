import React, { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);  // Para manejar la carga de datos
  const [error, setError] = useState(null);  // Para manejar errores

  useEffect(() => {
    // Llamada a la API externa para obtener las pizzas
    fetch("http://localhost:5001/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);  // Guardamos las pizzas en el estado
        setLoading(false);  // Detenemos la carga
      })
      .catch((error) => {
        setError(error.message);  // Guardamos el error
        setLoading(false);  // Detenemos la carga
      });
  }, []);

  // Si está cargando
  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  // Si hay un error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Si no hay pizzas
  if (pizzas.length === 0) {
    return <p>No se encontraron pizzas. Verifica la API.</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <div className="pizza-card">
              <img src={pizza.img} alt={pizza.name} className="pizza-img" />
              <div className="pizza-body">
                <h2 className="pizza-title">{pizza.name}</h2>
                <p className="pizza-price">${pizza.price}</p>
                <p className="pizza-ingredients-label">Ingredientes:</p>
                <ul className="pizza-ingredients-list">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                {/* Botón de añadir al carrito */}
                <button className="pizza-btn pizza-btn-dark">Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
