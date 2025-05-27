import React from 'react'

function Navbar() {
  return <div>
    <header className="bg-stone-950 w-full h-28 flex items-center justify-between px-10">
      <img src="https://placehold.co/75x86" alt="Logo" className="h-20" />
      
      <div className="flex items-center gap-8">
        {/* Language selector */}
        <div className="flex items-center gap-2 text-white text-xl">
          <span>ENGLISH</span>
          <div className="w-2.5 h-1.5 border-2 border-white" />
        </div>

        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-b border-white text-white placeholder-white/70 px-2 py-1 text-lg focus:outline-none"
          />
        </div>

        {/* Navigation links */}
        <nav className="flex gap-4 text-white text-xl">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/artikel" className="hover:underline">Artikel</Link>
          <Link to="/layanan" className="hover:underline">Layanan</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </nav>
      </div>
    </header>
  </div>;
}

export default Navbar;

