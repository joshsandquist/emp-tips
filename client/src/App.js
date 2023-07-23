import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reports from './pages/Reports'
import Employees from './pages/Employees'

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;