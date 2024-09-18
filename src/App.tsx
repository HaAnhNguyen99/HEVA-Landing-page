import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Service from './components/service/service';
import Pricing from './components/pricing/pricing';
import Footer from './components/footer/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    Aos.init();

    const scrollbar = Scrollbar.init(scrollRef.current!);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
