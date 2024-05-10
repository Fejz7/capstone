// App.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Utente from './components/Utente'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  

  return (
    <Router>
      <div className="App">
        <header>
          {showNavbar && <MyNavbar />}
        </header>
        <main style={{ marginBottom: '10px' }}>
          <Routes>
            <Route path="/utente" element={<Utente setShowNavbar={setShowNavbar} />} />
            
            <Route path="/*" element={<MyMain />} />
          </Routes>
        </main>
        <footer>
          <MyFooter/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
