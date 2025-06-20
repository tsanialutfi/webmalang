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
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white text-xl">
            <span>ENGLISH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
              />
            </svg>
          </div>
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
        <main className="flex-1 flex items-start justify-center py-20 px-4 bg-[url('https://i.postimg.cc/zD7R8LVP/Frame-326-1.png')] bg-cover bg-center">
          <div className="w-full max-w-5xl bg-transparent p-6">
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-black">Register</h1>
              <p className="text-2xl text-black mt-2">Website Kota Malang</p>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 px-4">
              {/* Kolom Kiri */}
              <div>
                <label className="block font-bold text-black mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-2">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-2">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-2">Alamat</label>
                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-2">
                  Foto Profil
                </label>
                <input
                  type="file"
                  className="w-full border-b border-black py-2 bg-transparent file:bg-gray-200 file:border-none file:rounded file:px-3"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-2">
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                />
              </div>

              {/* Tombol Register & Link ke Login */}
              <div className="md:col-span-2 flex items-center justify-between mt-6">
                <a
                  href="/login"
                  className="text-[#914800] hover:underline text-lg font-medium"
                >
                  Sudah punya akun? Login
                </a>
                <button
                  type="submit"
                  className="bg-[#914800] hover:bg-[#a05200] text-white text-xl font-bold py-2 px-8 rounded-full transition"
                >
                  Register
                </button>
              </div>
            </form>
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
