import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 to-black text-center text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Create, Customize, and Publish Your Digital Persona</h1>
      <p className="text-xl mb-8">Select an avatar, generate a script, and bring your AI digital persona to life effortlessly.</p>
      <button className="bg-purple-600 py-3 px-6 rounded-full text-lg hover:bg-purple-700">Get Started</button>
    </section>
  );
};

export default Hero;
