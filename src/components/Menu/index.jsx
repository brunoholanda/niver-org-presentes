import React, { useState } from 'react';
import './Menu.scss';

import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Menu() {

  const [animar, setAnimar] = useState(false);

  return (
    <>
      <section className='mb-3'>
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='first-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setAnimar(!animar)}
            >
              <div className={`icone-animado ${animar && 'abrir'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={animar}>
          <div className='#5C63EF shadow-3 p-1'>
            <MDBBtn block className='none m-0' color='link' style={{color: '#ffffff'}}>
              Home
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#ffffff'}}>
              A Festa
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#ffffff'}}>
              Presenteie
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#ffffff'}}>
              Contato
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}