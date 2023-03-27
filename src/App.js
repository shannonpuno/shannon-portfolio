import React, {useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Preloader from '../src/components/Pre';
import Home from './components/Home/Home';
import About from './components/Home/About';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Scroll from './components/Scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Scroll />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
