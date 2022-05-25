import React, { useEffect } from 'react'

import { About, Footer, Header, Skills, Work } from './container/';
import { Navbar } from './components';
import { useLocation } from "react-router-dom";

import './app.scss';

const App = () => {
    const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

    return (
        <div className = "app">
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Footer />
        </div>
        
    )
}

export default App
