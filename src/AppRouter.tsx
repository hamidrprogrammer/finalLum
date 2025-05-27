import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage';
import { Tablets } from './features/products/components/Tablets/Tablets';
import { Bottle } from './features/bottle/pages';
import { BuyBottle } from './features/products/pages/BuyBottle';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
                <Route path="/Tablete" element={<Tablets />} />
                <Route path="/Bottle" element={<Bottle />} />
                <Route path="/products" element={<BuyBottle />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
