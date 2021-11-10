import React, { Component } from 'react';
import './App.scss';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Navbar from './components/Navbar';

class App extends Component {
    render(){
        return (
            <div className="App">
               <Router>
                   <Navbar />
                   <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/favoritos" element={<Favoritos />} />
                   </Routes>
               </Router>
            </div>
        );
    }
}

export default App;
