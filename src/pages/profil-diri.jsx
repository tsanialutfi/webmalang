// src/pages/Register.jsx
import React from "react";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* HEADER */}
      <header className="bg-[#1C0A00] w-full h-28 flex items-center justify-between px-10">
        <img
          src="https://malangkota.go.id/wp-content/themes/boal/assetslp/img/LOGO_HUT_111TH_KOTA_MALANG.png"
          alt="Logo"
          className="h-20"
        />
        <nav className="flex gap-10 text-white text-xl font-medium">
          <a href="/" className=" hover:underline">
            Home
          </a>
          <a href="/layanan" className=" hover:underline">
            Layanan Publik
          </a>
          <a href="/artikel" className="hover:underline">
            Artikel
          </a>
          <a href="/profil" className="hover:underline font-bold">
            Profil
          </a>
        </nav>
        <div className="flex items-center gap-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-b border-white text-white placeholder-white/70 px-2 py-1 text-lg focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex items-center justify-center py-20 px-6 bg-[url('https://i.postimg.cc/zD7R8LVP/Frame-326-1.png')] bg-cover bg-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* KIRI: Foto Profil */}
          <div className="relative w-100 h-100">
            {/* Foto Profil */}
            <img
              src="https://i.postimg.cc/3wtf0ftw/image-1.png"
              alt="Foto Profil"
              className="w-full h-full "
            />

            {/* Tombol Edit */}
            <button className="absolute bottom-2 right-2 bg-[#5C2C00] w-28 h-28 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
              <svg
              className="h-16 w-16"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41"
                ></path>
              </svg>
            </button>
          </div>

          {/* KANAN: Info Profil */}
          <div className="flex-1 space-y-6 text-black">
            <div>
              <h2 className="text-4xl font-bold mb-2">Profil Diri</h2>
            </div>

            <div>
              <label className="block font-semibold mb-1">Username</label>
              <p className="border-b border-black pb-1">@roranisaa</p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Nama Lengkap</label>
              <p className="border-b border-black pb-1">Aurora Nisa Kusyanto</p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Tempat Lahir</label>
              <p className="border-b border-black pb-1">Kota Bekasi</p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Tanggal Lahir</label>
              <p className="border-b border-black pb-1">28 April 2005</p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Alamat</label>
              <p className="border-b border-black pb-1">Jl. Sumbersari</p>
            </div>

            <div className="pt-4">
              <button className="bg-[#914800] hover:bg-[#a05200] text-white text-base font-semibold py-2 px-6 rounded-full transition">
                Edit Profil
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full">
        <img
          src="https://i.postimg.cc/TwMGzcV5/image-25.png"
          alt="Footer Kota Malang"
          className="w-full h-auto object-cover"
        />
      </footer>
    </div>
  );
};

export default Register;
