import React from 'react';
import { Button } from './components/Button';

import './styles/global.css';

function App() {
  const onClick = () => {
    console.log('cliquei');
  };

  return (
    <div className="App">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>I'am works</p>
      <Button label="olá mundo" onClick={onClick} />
    </div>
  );
}

export default App;
