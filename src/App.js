import React from 'react';
import {Navbar, Home, Products, Services, Contactus, Footer } from './containers';
import './app.css';
import Axios from 'axios';

const App = () => {
    return <div className="App">
            <Navbar />
            <Home />
    </div>
};
export default App;

