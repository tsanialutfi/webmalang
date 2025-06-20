import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Artikel from './pages/artikel'
import Home from './pages/home'
import LayananPublik from './pages/layanan-publik'
import Login from './pages/login'
import ProfilDiri from './pages/profil-diri'
import Register from './pages/register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<ProfilDiri />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/layanan" element={<LayananPublik />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
