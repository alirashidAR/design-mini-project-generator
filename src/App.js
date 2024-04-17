import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Design from './geg';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Design />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
