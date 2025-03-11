import { Button } from 'antd';
import { useEffect, useState } from 'react';
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 right-0 transition duration-300 ease-in-out ${isScrolled ? "bg-gray-500" : "bg-gray-100"} p-4 flex w-full z-10 items-center justify-between`}>
        <p className='text-3xl'>Start Here</p>
      </header>
      <div className="flex-1 pt-20">
        <section className="p-4">
          <p className='text-2xl font-bold'>目標</p>
          <ul className='list-disc pl-16 text-lg'>
            <li></li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>流程</p>
          <ul className='list-disc pl-16 text-lg'>
            <li></li>
          </ul>
        </section>
        <Button>Antdesign test</Button>
      </div>
      <footer className="bg-gray-900 p-4 mt-4 text-white">
        <p>©Copyright</p>
      </footer>
    </div>
  );
}

export default App;