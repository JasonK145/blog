import { BulbOutlined } from '@ant-design/icons';
import { Button, Switch } from 'antd';
import { useContext, useState } from 'react';
import { ThemeContext } from './main.tsx';
import { useScrollEffect } from './utils/SwitchHandler';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useScrollEffect(setIsScrolled);

  return (
    <div className={`min-h-screen flex flex-col`}>
      <div className={`fixed top-0 left-0 right-0 transition duration-300 ease-in-out ${isScrolled ? "bg-gray-500" : "bg-gray-100"} p-4 flex w-full items-center justify-between`}>
        <div className='text-2xl text-gray-500 flex'>
          <BulbOutlined/>
          <span className='ml-1'>Design</span>
        </div>
        <div className='flex items-center justify-end flex-glow text-gray-500 text-sm'>
          <span className='mx-4'>Blog</span>
          <span className='mx-4'>Website</span>
          <span className='mx-4'>App</span>
          <span className='mx-4'>Kafka</span>
          <span className='mx-4'>AI</span>
          <span className='mx-4'>React</span>
          <span className='ml-8'>
            <Switch checkedChildren="白天" unCheckedChildren="黑夜" defaultChecked={!isDark} onChange={toggleTheme} />
          </span>
        </div>
      </div>
      <div className="flex-1 pt-20">
        <section className="p-4">
          <p className='text-2xl font-bold'>目標</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>前端八股文題目學習</li>
            <li>制作一個澳門資訊行業會用到技術</li>
            <li>制作一個可以用於交流的網站</li>
            <li>將含有以上兩點功能的網站制作成一個app</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>前端需要學習內容</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>前端 - React垃圾回收機制 - 引用計數算法 和 標記清除算法 - link</li>
            <li>數據庫 - kafka消息引擎系統，異步分布式消式</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>kafka</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>消息引擎系統，新增消息隊列來使用異步處理消息的方法，可以提升吞吐量、速度和成功率(使用分布式事務可以保證最終會成功)</li>
            <li>一般同步處理速度偏慢，需要等待一個任務完成後再做下一個任務，而且成功率較低(中間步驟出錯導致任務中斷)</li>
            <li>全球消息處理性能最快的MQ，有broker的重topic</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>交流網站</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>Website</li>
            <li>App</li>
          </ul>
        </section>
        <section className="p-4">
          <p className='text-2xl font-bold'>TODO-List</p>
          <ul className='list-disc pl-16 text-lg'>
            <li>一個包含每日備忘錄的功能</li>
            <li>可以發送email提醒的功能</li>
            <li>轉換白天黑夜的功能</li>
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