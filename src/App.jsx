import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}