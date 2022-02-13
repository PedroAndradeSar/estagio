
import logo from './componentes/icones/logo.svg';
import './App.css';
import React from 'react';
import Rota from "./routes/routes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
      </header>
      <div>
        <Rota/>
      </div>
    </div>
  );
}

export default App;
