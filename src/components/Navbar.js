import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <h1 className="text-2xl font-bold">AI.GEN</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-400 cursor-pointer">Features</li>
        <li className="hover:text-gray-400 cursor-pointer">Roadmap</li>
        <li className="hover:text-gray-400 cursor-pointer">Tokenomics</li>
      </ul>
      <button className="bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">Get Started</button>
    </nav>
  );
};

export default Navbar;
