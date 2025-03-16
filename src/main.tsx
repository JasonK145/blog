import 'antd/dist/reset.css';
import { StrictMode, createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 创建背景颜色 Context
export const ThemeContext = createContext<{ isDark: boolean; toggleTheme: () => void }>({
  isDark: false,
  toggleTheme: () => {},
});

const Root = () => {
  const [isDark, setIsDark] = useState(false);

  // 切换主题的函数，同时切换背景颜色
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? 'white' : 'black';
    document.body.style.color = isDark ? 'black' : 'white';
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <App />
    </ThemeContext.Provider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);