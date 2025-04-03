import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import RestaurantPage from './pages/RestaurantPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/city/:cityId" element={<CityPage />} />
      <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;