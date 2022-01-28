import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Unities } from './pages/Unities';
import { Players } from './pages/Players';

import './styles/global.css';
import { AdbContextProvider } from './context/AdbContext';

function App() {
  return (
    <BrowserRouter>
      <AdbContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/unities" exact component={Unities} />
          <Route path="/players" exact component={Players} />
        </Switch>
      </AdbContextProvider>
    </BrowserRouter>
  );
}

export default App;
