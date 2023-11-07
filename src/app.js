import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Обратите внимание на Routes
import './styles/style.css'
function App() {
    return(
<Router>
      <div className='head'>

        <div className='content-first'>
        <h5>Магазин Текстиль</h5>
        </div>

        <div className='content-two'>
            <a><Link>Мы </Link></a>
            <a><Link>Мы </Link></a>
            <a><Link>Мы </Link></a>
        </div>
         
      </div>
    </Router>
    
    );
}

export default App;