import { useState, useEffect } from 'react';

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
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className={`transition duration-300 ease-in-out ${isScrolled ? "bg-gray-700" : "bg-gray-900"} p-4 fixed w-full z-10`}>
        <p className='text-3xl text-white'>Start Here</p>
      </header>
      <div className="flex-1 pt-16">
        <section className="p-4">
          <h2 className='text-lg font-bold'>工作流程</h2>
          <ul className='list-disc pl-16'>
            <li></li>
          </ul>
        </section>
        <section className="p-4">
        <h2 className='text-lg font-bold'>工作流程</h2>
          <ul className='list-disc pl-16'>
            <li></li>
          </ul>
        </section>
      </div>
      <footer className="bg-gray-900 p-4 mt-4">
        <p>©Copyright</p>
      </footer>
    </div>
  );
}

export default App;