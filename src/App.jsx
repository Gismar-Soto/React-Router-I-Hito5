
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Pizza from './Pages/Pizza';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Layout from './components/Layout'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas con Layout que incluye Navbar, Header y Footer */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />  
        <Route path="/login" element={<Layout><Login /></Layout>} />  
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/pizza/p001" element={<Layout><Pizza /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />

        {/* Ruta para NotFound SIN Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;