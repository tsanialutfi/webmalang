import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Artikel from './pages/artikel'
import Home from './pages/home'
import LayananPublik from './pages/layanan-publik'
import Login from './pages/login'
import profilDiri from './pages/profil-diri'
import Register from './pages/register'
// import { LayananPublik } from './pages/layanan-publik.jsx';
// import { Login } from './pages/login.jsx'
// import { ProfilDiri } from './pages/profil-diri.jsx'
// import { Register } from './pages/register.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<profilDiri />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/layanan" element={<LayananPublik />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
