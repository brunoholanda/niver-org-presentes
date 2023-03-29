import React, { useState } from 'react';
import './Menu.scss';

import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

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
          <Link to="./">
            <MDBBtn block className='none m-0' color='link' style={{color: '#f2750e'}}>
              Inicio
            </MDBBtn>
            </Link>
            <MDBBtn block className='none m-0' color='link' style={{color: '#f2750e'}}>
              A Festa
            </MDBBtn>
            <Link to="./passeios">
            <MDBBtn block className='none m-0' color='link' style={{color: '#f2750e'}}>
              Presenteie
            </MDBBtn>
            </Link>
            <Link to="./abadas">
            <MDBBtn block className='none m-0' color='link' style={{color: '#f2750e'}}>
              Seu Abada
            </MDBBtn>
            </Link>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}