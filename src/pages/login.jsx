// src/pages/Login.jsx
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Login = () => {
    return (
        <div>
            <div className="w-full min-h-screen relative bg-white overflow-hidden">
                {/* Header */}
                <div className="w-full h-28 bg-stone-950 relative px-4 md:px-20 flex items-center justify-between">
                    <img className="w-20 h-20" src="https://placehold.co/75x86" alt="logo" />
                    <div className="flex items-center gap-10">
                        {/* Search */}
                        <div className="relative w-64 h-8 hidden md:block">
                            <div className="absolute w-8 h-8">
                                <div className="w-4 h-4 absolute left-1 top-1 outline outline-2 outline-white" />
                                <div className="w-1.5 h-5 absolute left-4 top-4 outline outline-2 outline-white" />
                            </div>
                            <div className="absolute w-full h-px top-9 outline outline-1 outline-white"></div>
                            <div className="absolute left-10 text-white text-xl opacity-70">Search</div>
                        </div>
                        {/* Language Switch */}
                        <div className="flex items-center text-white text-2xl gap-1">
                            ENGLISH
                            <div className="w-5 h-5 relative">
                                <div className="w-2.5 h-1.5 absolute top-2 left-1 outline outline-2 outline-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Section */}
                <div className="flex flex-col items-center w-full px-4 py-16 md:px-32 lg:px-52">
                    <div className="flex flex-col lg:flex-row items-start gap-10 w-full max-w-[1800px]">
                        {/* Left Section */}
                        <div className="flex-1 flex flex-col items-center gap-5 text-center">
                            <h1 className="text-5xl md:text-7xl font-bold text-black">Login</h1>
                            <p className="text-2xl md:text-4xl font-medium text-black">Website Kota Malang</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px bg-black h-[870px]" />

                        {/* Right Section - Form */}
                        <div className="flex-1 flex flex-col items-center gap-10">
                            {/* Username */}
                            <div className="w-full max-w-lg">
                                <label className="block text-2xl font-bold text-black mb-4">Username</label>
                                <div className="w-full h-px outline outline-2 outline-black"></div>
                            </div>
                            {/* Password */}
                            <div className="w-full max-w-lg">
                                <label className="block text-2xl font-bold text-black mb-4">Password</label>
                                <div className="w-full h-px outline outline-2 outline-black"></div>
                            </div>
                            {/* Button */}
                            <button className="w-52 h-14 px-6 py-2.5 bg-amber-800 rounded-full text-white text-2xl font-bold">Login</button>
                        </div>
                    </div>
                </div>

                {/* Footer Image */}
                <div className="w-full mt-10">
                    <img className="w-full h-auto" src="https://placehold.co/1920x818" alt="footer-banner" />
                </div>

                {/* Footer Section */}
                <div className="w-full bg-stone-950 text-white px-4 py-10 md:px-24 relative">
                    <div className="flex flex-wrap gap-10 justify-between">
                        {/* Places to Visit */}
                        <div>
                            <h3 className="text-xl font-medium uppercase">Places to Visit</h3>
                            <ul className="text-lg space-y-2 capitalize">
                                <li>Historical</li>
                                <li>Religious & Spiritual</li>
                                <li>Parks & Recreation</li>
                                <li>Educational</li>
                                <li>Tours & Packages</li>
                            </ul>
                        </div>

                        {/* Experiences */}
                        <div>
                            <h3 className="text-xl font-medium uppercase">Experiences</h3>
                            <ul className="text-lg space-y-2 capitalize">
                                <li>Arts & Crafts</li>
                                <li>Festivals & Events</li>
                                <li>Food</li>
                                <li>Nature</li>
                                <li>Markets</li>
                            </ul>
                        </div>

                        {/* Heritage Walk */}
                        <div>
                            <h3 className="text-xl font-medium uppercase">Heritage Walk</h3>
                            <ul className="text-lg space-y-2 capitalize">
                                <li>Morning Walk</li>
                                <li>Evening Walk</li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="text-lg">
                            <h4 className="text-orange-100 text-2xl font-medium mb-2">Address:</h4>
                            <p>Heritage Department, AMC</p>
                            <p>Amdavad Municipal Corporation</p>
                            <p>2HCP+78V, Municipal Bal Bhavan, Danapith, Ahmedabad, Gujarat 380008</p>
                            <p>Mahanagar Seva Sadan, Sardar Patel Bhavan, Danapith, Ahmedabad, Gujarat 380001</p>
                            <p className="text-orange-100 mt-4 text-2xl">Email:</p>
                            <a href="mailto:feedback@ahmedabadcity.gov.in" className="underline text-white text-xl">
                                feedback@ahmedabadcity.gov.in
                            </a>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-10 text-center text-sm text-white">
                        <p>Copyright 2022 Ahmedabad Heritage City</p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Login;
