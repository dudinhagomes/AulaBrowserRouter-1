import React from 'react'
import  ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes} from 'react-router-dom'
import Home from "./home"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Produto" element={<Produto/>}/>
            <Route path="/Ofeerta" element={<Oferta/>}/>
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
)