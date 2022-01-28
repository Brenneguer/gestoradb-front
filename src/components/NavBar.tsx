import React from 'react';
import { Navbar } from 'react-bootstrap';

import '../styles/navBar.css';

type NavBarProps = {
  title?: string,
}

const defaultProps = {
  title: '',
};

NavBar.defaultProps = defaultProps;

export function NavBar(props: NavBarProps) {
  const { title } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="navTitle">{`Gestor Adb/${title}`}</Navbar.Brand>
    </Navbar>
  );
}
