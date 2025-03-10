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
    <div className="bg-black text-white min-h-screen">
      <header className={`transition duration-300 ease-in-out ${isScrolled ? "bg-gray-700" : "bg-gray-900"} p-4 fixed w-full z-10`}>
        <h1 className="text-xl font-bold">Sam Chan 外包網</h1>
      </header>
      <div className="pt-16">
        <section className="p-4">
          <h2 className="text-lg font-bold">NEWS</h2>
          <ul className="list-disc pl-5">
            <li>第1單job制作決定</li>
            <li>第2單job制作決定公開！</li>
            <li>新單job制作決定</li>
          </ul>
        </section>
        <section className="p-4">
          <h2 className="text-lg font-bold">STORY</h2>
          <p>Sam Chan 專業外包</p>
        </section>
        <section className="p-4">
          <h2 className="text-lg font-bold">CHARACTERS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">sam chan</h3>
              <p>sam chan</p>
            </div>
            <div>
              <h3 className="font-bold">sam chan </h3>
              <p>sam chan </p>
            </div>
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-lg font-bold">EPISODES</h2>
          <ul>
            <li>第1份job</li>
            <li>第2份job</li>
            <li>第3份job</li>
          </ul>
        </section>
        <footer className="bg-gray-800 p-4 mt-4">
          <p>©Sam Chan 外包公司</p>
        </footer>
      </div>
    </div>
  );
}

export default App;