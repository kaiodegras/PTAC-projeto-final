import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cadastrar from './cadastrar'
import Destaque from './destaque'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
        
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
