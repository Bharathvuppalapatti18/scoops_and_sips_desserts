import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FullMenu from './pages/FullMenu';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Catering from './pages/Catering';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Clean white background */}
      <div className="min-h-screen bg-white pt-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
