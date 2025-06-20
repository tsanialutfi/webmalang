// src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* <Navbar /> */}
      <header className="bg-[#1C0A00] w-full h-28 flex items-center justify-between px-10">
        <img
          src="https://malangkota.go.id/wp-content/themes/boal/assetslp/img/LOGO_HUT_111TH_KOTA_MALANG.png"
          alt="Logo"
          className="h-20"
        />

        <div className="flex items-center gap-8">
          {/* Language selector */}
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
            </svg>{" "}
          </div>

          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-b border-white text-white placeholder-white/70 px-2 py-1 text-lg focus:outline-none"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-40 px-4 bg-[url('https://i.postimg.cc/zD7R8LVP/Frame-326-1.png')] bg-cover bg-center">
        <div className="w-full max-w-6xl overflow-hidden flex flex-col md:flex-row">
          {/* Kiri: Judul */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-10">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 text-center">
              Login
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-black text-center">
              Website Kota Malang
            </p>
          </div>

          {/* Pemisah vertikal */}
          <div className="hidden md:block w-px bg-black " />

          {/* Kanan: Form */}
          <div className="md:w-1/2 w-full p-10">
            <form className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-2xl font-bold text-black mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full border-b-2 border-black py-2 text-lg focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-2xl font-bold text-black mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full border-b-2 border-black py-2 text-lg focus:outline-none"
                />
              </div>

              {/* Tombol Login */}
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="bg-amber-800 text-white text-2xl font-bold py-3 px-8 rounded-full hover:bg-amber-700 transition"
              >
                Login
              </button>

              {/* Link ke Register */}
              <p className="text-center text-lg text-black">
                Belum punya akun?{" "}
                <a
                  href="/register"
                  className="text-amber-800 font-semibold hover:underline"
                >
                  Register di sini
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className=" w-full">
        <img
          src="https://i.postimg.cc/TwMGzcV5/image-25.png" // atau URL langsung ke gambar
          alt="Footer Kota Malang"
          className="w-full h-auto object-cover"
        />
      </footer>

      {/* <Footer /> */}
    </div>
  );
};

export default Login;
