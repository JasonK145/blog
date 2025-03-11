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
      <div className="flex-1 pt-20 mt-7">
        <section className="p-4">
          <p className='text-2xl font-bold'>目標</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>前端八股文題目學習</li>
            <li>制作一個可以用於使用的個人blog</li>
            <li>制作一個可以用於交流的網站</li>
            <li>將含有以上兩點功能的網站制作成一個app</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>前端需要學習內容</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>垃圾回收機制 - 引用計數算法 和 標記清除算法 - link</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>Blog</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>個人blog</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>交流網站</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>Website</li>
            <li>App</li>
          </ul>
        </section>
        <Button>Antdesign test</Button>
      </div>
      <footer className="bg-gray-500 p-4 mt-4 text-white">
        <p>©Copyright</p>
      </footer>
    </div>
  );
}

export default App;