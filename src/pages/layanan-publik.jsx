// src/pages/Home.jsx
import React from "react";

const services = [
  {
    title: "Malang Creative Center",
    desc: "Rumah Bersama Pelaku EKRAF di Kota Malang",
    image: "https://malangkota.go.id/wp-content/themes/boal/assetslp/img/gallery/mcc.jpg",
  },
  {
    title: "AdminDuk",
    desc: "Layanan Dokumen Kependudukan",
    image: "https://malangkota.go.id/wp-content/themes/boal/assetslp/img/gallery/adminduk.jpg",
  },
  {
    title: "MPP Merdeka",
    desc: "Mal Pelayanan Publik Kota Malang",
    image: "https://malangkota.go.id/wp-content/themes/boal/assetslp/img/gallery/mpp_merdeka.jpg",
  },
  {
    title: "Ngalam 112",
    desc: "Panggilan Darurat untuk Seluruh Warga Kota Malang",
    image: "https://malangkota.go.id/wp-content/themes/boal/assetslp/img/gallery/ngalam_112.jpg",
  },
  {
    title: "Si-Izol",
    desc: "Aplikasi Pelayanan Perizinan Pemerintah Kota Malang",
    image: "https://malangkota.go.id/wp-content/themes/boal/assetslp/img/gallery/siizol.jpg",
  }
];

const LayPub = () => {
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
          <a href="/layanan" className="font-bold hover:underline">
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
      <main className="min-h-screen w-full flex flex-col items-center justify-start py-16 px-4 bg-[#5C2C00]">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Layanan Publik
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{service.desc}</p>
            </div>
          </div>
        ))}
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

export default LayPub;
