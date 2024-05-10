import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function MyFooter() {
    return (
        <footer style={{
            
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: '#2D2D2D',
            textAlign: 'center'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <button className='PulsanteFooter'>ISCRIVITI ALLA NOSTRA NEWSLETTER</button>
            </div>
            <div id='paragrafoFooter' className='d-flex justify-content-center'>
                <div className='d-flex flex-column ms-5'>
                    <h5 style={{borderBottom:"1px solid grey",color:"grey"}}>PAESE</h5>
                    <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Italia
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
            UK
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">France</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Germany</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
                </div>
                <div className='d-flex flex-column ms-5'>
                    <h5 style={{borderBottom:"1px solid grey",color:"grey"}}>LINK VELOCI</h5>
                    <p className='paragrafo'>Giochi</p>
                    <p>Merchandising</p>
                    <p>Offerte</p>
                    <p>Ricompense</p>
                    </div>
                <div className='d-flex flex-column ms-5'>
                    <h5 style={{borderBottom:"1px solid grey",color:"grey"}}>SERVIZIO CLIENTI</h5>
                    <p>Centro assistenza</p>
                    <p>Il mio account</p>
                    </div>
                <div className='d-flex flex-column ms-5'>
                    <h5 style={{borderBottom:"1px solid grey",color:"grey"}}>GARANZIE</h5>
                    <p>Termini d'uso</p>
                    <p>Informativa sulla privacy</p>
                    <p>Politica sui resi</p>
                    <p>Programma ricompense Members</p>
                    <p>Dichiarazione di accessibilità</p>
                    </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div className='d-flex flex-column ms-5'>
                    <h5 style={{borderBottom:"1px solid grey",color:"grey"}}>SEGUICI</h5>
                    <div className='d-flex'><i class="bi bi-facebook me-1"></i><i class="bi bi-twitter-x me-1"></i><i class="bi bi-youtube me-1"></i><i class="bi bi-instagram me-1"></i><i class="bi bi-twitch me-1"></i></div>
                    </div>
            </div>
            <div className='ContenitoreFooter1'>
                <img className='immagineFooter' src="SquareEnix.png" alt="" />
            </div>
        </footer>
    );
}

export default MyFooter;

















