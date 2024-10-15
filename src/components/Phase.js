import React from 'react';

const Phase = ({ phase, description }) => {
  return (
    <section className="p-12 bg-black text-white">
      <h3 className="text-2xl font-bold mb-4">{phase}</h3>
      <p>{description}</p>
    </section>
  );
};

export default Phase;
