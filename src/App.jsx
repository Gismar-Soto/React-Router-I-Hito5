import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Pizza from './Pages/Pizza';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';
import Header from './components/Header';  

const App = () => {
  return (
    <Router>
      <Navbar />  
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
