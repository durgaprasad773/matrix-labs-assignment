import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Phase from './components/Phase';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Phase 
        phase="Phase 3: Integration with PancakeSwap, Waves" 
        description="In this phase, the focus will be on integration with popular DeFi platforms like PancakeSwap and Waves to facilitate token transactions." 
      />
      <Footer />
    </div>
  );
}

export default App;
