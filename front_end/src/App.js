import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Welcome from './Components/Guest/Welcome'

function App() {
  return (
    <>
      <Router>
        <Welcome/>
        
      </Router>
    </>
  );
}

export default App;
