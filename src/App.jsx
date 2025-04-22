import React, { useRef } from 'react';
import Navbar from './components/navbar';
import SmallCard from './components/smallCard';
import BigCard from './components/bigCard';
import DMJLogo from '/DMJLogo.svg';
import OSLogo from '/OSLogo.svg';
import SBDLogo from '/SBDLogo.svg';
import HomePage from './pages/homePage';

function App() {
  // Buat ref untuk masing-masing Big Card
  const dmjRef = useRef(null);
  const osRef = useRef(null);
  const sbdRef = useRef(null);
 
  // Fungsi untuk scroll ke elemen tertentu
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <div className="bg-gray-300 min-h-screen overflow-x-hidden">
      <Navbar scrollTo={{ dmj: () => scrollToRef(dmjRef), os: () => scrollToRef(osRef), sbd: () => scrollToRef(sbdRef) }} />
     
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        <HomePage />
        {/* Container untuk Small Cards */}
        <div className="flex justify-center items-center w-full px-1 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl m-auto justify-center">
            <SmallCard
              imageUrl={DMJLogo}
              name="Desain Manajemen Jaringan"
              description="Mata kuliah tentang desain dan pengelolaan jaringan komputer."
              buttonText="Learn More"
              onButtonClick={() => scrollToRef(dmjRef)}
            />
            <SmallCard
              imageUrl={OSLogo}
              name="Sistem Operasi"
              description="Mata kuliah tentang konsep dasar sistem operasi."
              buttonText="Learn More"
              onButtonClick={() => scrollToRef(osRef)}
            />
            <SmallCard
              imageUrl={SBDLogo}
              name="Sistem Basis Data"
              description="Mata kuliah tentang konsep dasar sistem basis data."
              buttonText="Learn More"
              onButtonClick={() => scrollToRef(sbdRef)}
            />
          </div>
        </div>
       
        {/* Container untuk Big Cards */}
        <div className="flex flex-col items-center w-full px-4 pb-10 space-y-8">
          <div ref={dmjRef} className="max-w-6xl w-full">
            <BigCard
              image={DMJLogo}
              title="Desain Manajemen Jaringan"
              description="Desain Manajemen Jaringan adalah mata kuliah yang membahas tentang desain dan manajemen jaringan komputer, termasuk perencanaan, pengelolaan, dan pemeliharaan jaringan."
              link="https://learn.netlabdte.com/docs/category/dmj"
            />
          </div>
         
          <div ref={osRef} className="max-w-6xl w-full">
            <BigCard
              image={OSLogo}
              title="Sistem Operasi"
              description="Sistem Operasi adalah mata kuliah yang membahas tentang konsep dasar sistem operasi, termasuk manajemen proses, manajemen memori, dan sistem berkas."
              link="https://learn.netlabdte.com/docs/category/os"
            />
          </div>
         
          <div ref={sbdRef} className="max-w-6xl w-full">
            <BigCard
              image={SBDLogo}
              title="Sistem Basis Data"
              description="Sistem Basis Data adalah mata kuliah yang membahas tentang konsep dasar sistem basis data, termasuk model data, bahasa query, dan manajemen basis data."
              link="https://learn.netlabdte.com/docs/category/sbd"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;