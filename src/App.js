import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import BalaEmployee from './bala';
import PriyaEmployee from './priya';
import ShivaEmployee from './shiva';
import SaipalaviEmployee from './saipalavi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/employee" element={<Employee />}>
          <Route path="/bala" element={<BalaEmployee/>} />
          <Route path="/saipalavi" element={<SaipalaviEmployee/>} />
          <Route path="/shiva" element={<ShivaEmployee/>} />
          <Route path="/priya" element={<PriyaEmployee/>} /> 
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
