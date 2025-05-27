// src/pages/Login.jsx
import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home(){
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-black mb-2">Login</h1>
          <p className="text-3xl font-medium text-black">Website Kota Malang</p>
        </div>

        <div className="w-full max-w-xl bg-white p-8 border border-gray-300 rounded-lg shadow">
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="username" className="block text-2xl font-bold text-black mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full border-b-2 border-black py-2 text-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-2xl font-bold text-black mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border-b-2 border-black py-2 text-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-800 text-white text-2xl font-bold py-3 rounded-full hover:bg-amber-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Navbar />

//       <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
//         <div className="text-center mb-10">
//           <h1 className="text-6xl font-bold text-black mb-2">Login</h1>
//           <p className="text-3xl font-medium text-black">Website Kota Malang</p>
//         </div>

//         <div className="w-full max-w-xl bg-white p-8 border border-gray-300 rounded-lg shadow">
//           <form className="flex flex-col gap-6">
//             <div>
//               <label htmlFor="username" className="block text-2xl font-bold text-black mb-2">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 className="w-full border-b-2 border-black py-2 text-lg focus:outline-none"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-2xl font-bold text-black mb-2">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full border-b-2 border-black py-2 text-lg focus:outline-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-amber-800 text-white text-2xl font-bold py-3 rounded-full hover:bg-amber-700 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

export default Home;
