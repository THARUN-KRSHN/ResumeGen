import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '@mui/material';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <MDBNavbar expand="lg" light bgColor='black'>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{ cursor: 'pointer', color: 'grey' }} onClick={() => navigate('/')}>
          NextGen Resume
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={open}>
          <MDBNavbarNav className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => navigate('/main')} style={{ cursor: 'pointer', color: 'grey' }}>
                Main
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => navigate('/builder')} style={{ cursor: 'pointer', color: 'grey'}}>
                Resume Builder
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => navigate('/ats-checker')} style={{ cursor: 'pointer', color: 'grey' }}>
                ATS Checker
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => navigate('/')} style={{ cursor: 'pointer', color: 'grey' }}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
