import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gray-900 p-12 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="p-6 bg-purple-800 rounded-lg mb-4">Icon 1</div>
          <h3 className="text-xl font-bold">Select an Avatar</h3>
        </div>
        <div className="text-center">
          <div className="p-6 bg-purple-800 rounded-lg mb-4">Icon 2</div>
          <h3 className="text-xl font-bold">Create or Generate Script</h3>
        </div>
        <div className="text-center">
          <div className="p-6 bg-purple-800 rounded-lg mb-4">Icon 3</div>
          <h3 className="text-xl font-bold">Select AI Voices</h3>
        </div>
        <div className="text-center">
          <div className="p-6 bg-purple-800 rounded-lg mb-4">Icon 4</div>
          <h3 className="text-xl font-bold">Publish</h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
