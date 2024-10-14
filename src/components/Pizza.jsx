import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Para obtener el ID desde la URL

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();  // Obtenemos el ID de la pizza desde la URL

  useEffect(() => {
    // Llamada a la API para obtener la pizza con el ID especificado
    fetch(`http://localhost:5001/api/pizzas/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        return response.json();
      })
      .then((data) => {
        setPizza(data);  // Guardamos la pizza en el estado
      })
      .catch((error) => {
        console.error("Error fetching pizza:", error);
      });
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>; // Si no hay pizza, mostramos un mensaje

  return (
    <div className="container">
      <h1>{pizza.name}</h1>
      <img src={pizza.image} alt={pizza.name} className="pizza-img" />
      <p className="pizza-price">${pizza.price}</p>
      <p>Ingredientes:</p>
      <ul className="pizza-ingredients-list">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {/* Botón para añadir al carrito */}
      <button className="pizza-btn pizza-btn-dark">Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
