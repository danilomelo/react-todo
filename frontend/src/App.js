import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css';
import Routes from './main/routes'
import Menu from './template/menu'
import Sidebar from './template/sidebar'

function App() {
  return (
    <div className="App container">
    <BrowserRouter>
      <Menu/>
      <Routes/>
      <Sidebar/>
    </BrowserRouter>
    </div>
  );
}

export default App;
