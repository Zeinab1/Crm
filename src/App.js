import React from 'react';
import Clients from './component/clients/Clients';
import ClientsForm from './component/clients/ClientsForm'
import './App.css';

function App() {
  return (
    <div className="App">
     <Clients/>
     <ClientsForm/>
    </div>
  );
}

export default App;
