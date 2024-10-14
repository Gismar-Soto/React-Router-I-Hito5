import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, incrementQuantity, decrementQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart container mt-4">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-content">
            <h5>{item.name}</h5>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price.toLocaleString('es-ES')}</p>
            <p>Total: ${(item.price * item.quantity).toLocaleString('es-ES')}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <button onClick={() => incrementQuantity(item.id)} className="btn btn-primary me-2">+</button>
                <button onClick={() => decrementQuantity(item.id)} className="btn btn-secondary">-</button>
              </div>
              <div>
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faCreditCard} className="me-2" /> {/* Aquí agregamos el ícono */}
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
