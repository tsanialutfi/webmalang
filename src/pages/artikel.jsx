// src/pages/Home.jsx
import React from "react";

const Artikel = () => {
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
          <a href="/artikel" className="font-bold hover:underline">
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
      <main className="min-h-screen w-full flex flex-col bg-white">
      {/* Header Section */}
      <section className="bg-[#5C2C00] text-white text-center py-10">
        <h1 className="text-4xl font-bold">Artikel</h1>
      </section>

      {/* Artikel Utama */}
      <section className="relative">
        <img
          src="https://malangposcomedia.id/mpm/uploads/2025/05/laka-dau-1-1536x1152.webp"
          alt="Laka Jetis"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6">
          <h2 className="text-white text-4xl font-bold max-w-3xl">
            Laka Tunggal di Jetis, Satu Meninggal
          </h2>
        </div>
      </section>

      {/* Artikel Kedua */}
      <section className="bg-[#FAEBD7] py-12 px-6 md:px-16 flex flex-col md:flex-row items-start gap-8">
        <img
          src="https://malangkota.go.id/wp-content/uploads/2025/05/Retta.jpeg"
          alt="Pecatur Muda"
          className="w-full md:w-[350px] h-auto rounded shadow"
        />
        <div>
          <h3 className="text-2xl font-bold text-[#5C2C00] mb-2">
            Dua Pecatur Muda Kota Malang Ikuti Pelatnas Tatap Kejuaraan Asia 2025
          </h3>
          <p className="text-gray-800 leading-relaxed text-justify">
            Klojen (malangkota.go.id) – Semangat dan ketekunan pecatur muda Kota
            Malang, Claretta Nathaniela Handoko berbuah manis. Siswi kelas VIII
            SMPK Frateran Kota Malang ini terpilih masuk dalam Pemusatan Latihan
            Nasional (Pelatnas) Catur Indonesia untuk mengikuti Kejuaraan Catur
            Junior Asia yang akan digelar di China pada bulan Juli 2025 mendatang.
            Sebelumnya, prestasi yang ditorehkan Claretta pun sangat luar biasa,
            yakni juara nasional di kelompok umur 14 tahun pada tahun 2024.
          </p>
        </div>
      </section>

      {/* Artikel Ketiga */}
      <section className="bg-[#5C2C00] text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">
            SMPN 15 Malang Gelar Karya P5 di Jatim Park 2, Keren Ratusan Siswa
            Persembahkan Tari Kolosal
          </h3>
          <p className="leading-relaxed text-justify text-white/90">
            MALANG POSCO MEDIA, KOTA BATU – Keren! Itulah kata yang tepat untuk
            SMPN 15 Kota Malang. Bagaimana tidak, sebanyak 285 siswa-siswi kelas
            VIII SMPN 15 Kota Malang sukses menampilkan tari kolosal bertajuk
            ‘Nusantara Berkisah, Topeng Irama Semesta Dalam Semangat Pancasila’
            sebagai tugas akhir Proyek Penguatan Profil Pelajar Pancasila (P5) di
            Jatim Park 2, Rabu (21/5) kemarin.
          </p>
        </div>
        <img
          src="https://malangposcomedia.id/mpm/uploads/2025/05/WhatsApp-Image-2025-05-21-at-17.12.19-1536x717.webp"
          alt="SMPN 15 Malang"
          className="w-full md:w-[350px] h-auto rounded shadow"
        />
      </section>
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

export default Artikel;
