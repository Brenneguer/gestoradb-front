import React from 'react';
import { NavBar } from '../components/NavBar';
import { AdbButton } from '../components/AdbButton';

const onClick = () => {
  console.log('cliquei');
};

export function Home() {
  return (
    <div className="App">
      <NavBar />
      <p>I'am works</p>
      <AdbButton label="olá mundo" onClick={onClick} />
    </div>
  );
}
