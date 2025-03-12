import { Button, Switch} from 'antd';
import { useState } from 'react';
import { handleSwitchChange, useScrollEffect } from './utils/SwitchHandler';
import { BulbOutlined } from '@ant-design/icons';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollEffect(setIsScrolled);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <div className={`fixed top-0 left-0 right-0 transition duration-300 ease-in-out ${isScrolled ? "bg-gray-500" : "bg-gray-100"} p-4 flex w-full items-center justify-between`}>
        <div className='text-2xl text-gray-500 flex'>
          <BulbOutlined/>
          <span className='ml-1'>Design</span>
        </div>
        <div className='flex items-center justify-end flex-glow text-gray-500 text-sm'>
          <span className='mx-4'>Blog</span>
          <span className='mx-4'>Website</span>
          <span className='mx-4'>App</span>
          <span className='ml-8'>
            <Switch checkedChildren="白天" unCheckedChildren="黑夜" defaultChecked onChange={handleSwitchChange} />
          </span>
        </div>
        
      </div>
      <div className="flex-1 pt-20">
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
        <Button onClick={() => alert("warning")}>Antdesign test</Button>
      </div>
      <footer className="bg-gray-500 p-4 mt-4 text-white">
        <p>©Copyright</p>
      </footer>
    </div>
  );
}

export default App;