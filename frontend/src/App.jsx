import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


import Terms from './pages/landingpages/terms'
import Landing from './pages/landingpages/landing'

import '../public/css/style.css'
import './App.css'
import Policy from './pages/landingpages/policy';

function App() {
  return (
  <BrowserRouter>
     <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
