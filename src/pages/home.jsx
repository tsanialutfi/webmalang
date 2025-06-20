// src/pages/Home.jsx
import React from "react";

const Home = () => {
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
          <a href="/" className="font-bold hover:underline">
            Home
          </a>
          <a href="/layanan" className="hover:underline">
            Layanan Publik
          </a>
          <a href="/artikel" className="hover:underline">
            Artikel
          </a>
          <a href="/profil" className="hover:underline">
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

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-start py-20 px-6 bg-[url('https://i.postimg.cc/zD7R8LVP/Frame-326-1.png')] bg-cover bg-center">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black">
            Selamat Datang di Website Kota Malang
          </h1>
          <p className="text-2xl text-black mt-4">
            Informasi seputar wisata, budaya, kuliner, dan pendidikan di Kota
            Malang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Wisata */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://jalankebromo.com/wp-content/uploads/2024/11/bukit-kuneer-malang.jpg"
              alt="Wisata di Kota Malang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Wisata di Kota Malang
              </h2>
              <p className="text-gray-800">
                Jumlah wisatawan ke Kota Malang pada tahun 2023 mencapai lebih
                dari:
              </p>
              <p className="text-3xl font-bold text-amber-700 mt-2">4 Juta++</p>
            </div>
          </div>

          {/* Kuliner */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.tokopedia.net/img/KRMmCm/2022/6/7/3a1e1a71-2a09-4fb8-8a5d-0d6bd6c24183.jpg"
              alt="Kuliner di Kota Malang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Kuliner di Kota Malang
              </h2>
              <p className="text-gray-800">Terdapat lebih dari:</p>
              <p className="text-3xl font-bold text-amber-700 mt-2">
                1.500++ UMKM kuliner
              </p>
            </div>
          </div>

          {/* Seni Budaya */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/81/2024/05/09/Full-Mberot-di-Malang-Raya_Tangkapan-Layar-Instagram-_-laskarsejatiofficial-1701453340.jpg"
              alt="Seni Budaya di Kota Malang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Seni Budaya di Kota Malang
              </h2>
              <p className="text-gray-800">
                Jumlah komunitas kreatif aktif di bidang seni, film, dan desain:
              </p>
              <p className="text-3xl font-bold text-amber-700 mt-2">
                300++ Komunitas
              </p>
            </div>
          </div>

          {/* Transportasi */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gpns6p09nzctas3ek996v8cx.jpg"
              alt="Transportasi Kota Malang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Transportasi & Perkotaan
              </h2>
              <p className="text-gray-800">
                Titik kemacetan aktif yang tercatat di Kota Malang:
              </p>
              <p className="text-3xl font-bold text-amber-700 mt-2">
                150++ Titik
              </p>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2">
            <img
              src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gpns6p09nzctas3ek996v8cx.jpg"
              alt="Pendidikan di Kota Malang"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Pendidikan di Kota Malang
              </h2>
              <p className="text-gray-800">
                Jumlah perguruan tinggi yang aktif dan berkontribusi terhadap
                populasi mahasiswa:
              </p>
              <p className="text-3xl font-bold text-amber-700 mt-2">
                50++ Kampus
              </p>
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

export default Home;
