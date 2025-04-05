import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Footer from './components/Footer';
import RestaurantPage from './pages/RestaurantPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:cityId" element={<CityPage />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
			<Footer></Footer>
		</Router>
  );
};

export default App;