import React from 'react';
import { Navbar } from 'react-bootstrap';

import '../styles/navBar.css';

export function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="navTitle">Gestor Adb</Navbar.Brand>
    </Navbar>
  );
}
