import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import RestaurantPage from './pages/RestaurantPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/city/:cityId" element={<CityPage />} />
      <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;