import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Cursor from './Components/Cursor/Cursor';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
