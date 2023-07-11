import logo from './logo.svg';
import './App.css';
import './assets/css/root.css';
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import overflow_1 from './assets/png/overflow_1.png'
import Section1 from './components/Section1.jsx';
import Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import Section4 from './components/Section4.jsx';
import Section5 from './components/Section5.jsx';
import Section6 from './components/Section6.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, [])
  return (
    <div>
      <div className='overflow-hidden'>

        <img className='position-absolute overflow-image w-46' src={overflow_1} alt="" />

        <div className='my-container position-relative'>
          <Nav />
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
