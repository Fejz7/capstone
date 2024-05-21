import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Utente from './components/Utente';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import Carrello from './components/Carrello';
import PaginaRegistrazione from './components/PaginaRegistrazione';
import MyModal from './components/MyModal'; // Import del componente modale

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prodottiCarrello, setProdottiCarrello] = useState([]);
  const [termineRicerca, setTermineRicerca] = useState('');
  const [showModal, setShowModal] = useState(false); // Stato per gestire la visualizzazione del modale

  const rimuoviDalCarrello = (index) => {
    const newProdottiCarrello = [...prodottiCarrello];
    newProdottiCarrello.splice(index, 1);
    setProdottiCarrello(newProdottiCarrello);
  };

  const aggiungiAlCarrello = (prodotto) => {
    setProdottiCarrello((prevProdottiCarrello) => [...prevProdottiCarrello, prodotto]);
    setShowModal(true); // Mostra il modale quando un prodotto viene aggiunto al carrello
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <div className="App">
        <header>
          {showNavbar && <MyNavbar setTermineRicerca={setTermineRicerca} />}
        </header>
        <main>
          <Routes>
            <Route path="/utente" element={<Utente setShowNavbar={setShowNavbar} />} />
            <Route path="/registrazione" element={<PaginaRegistrazione setShowNavbar={setShowNavbar} />} />
            <Route
              path="/*"
              element={<MyMain aggiungiAlCarrello={aggiungiAlCarrello} termineRicerca={termineRicerca} />}
            />
            <Route
              path="/carrello"
              element={<Carrello prodottiCarrello={prodottiCarrello} rimuoviDalCarrello={rimuoviDalCarrello} />}
            />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
        <MyModal show={showModal} handleClose={handleCloseModal} /> {/* Aggiunto il componente modale */}
      </div>
    </Router>
  );
}

export default App;
