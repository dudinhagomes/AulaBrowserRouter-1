import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Produto from "./Produto"
import Oferta from "./Ofertas"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Produto" element={<Produto/>}/>
        <Route path="/Oferta" element={<Oferta/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
