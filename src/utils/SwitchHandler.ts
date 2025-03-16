import { useContext, useEffect } from 'react';
import { ThemeContext } from '../main.tsx';

// 自定义钩子 useTheme 用于获取主题状态和切换主题的函数
export const useTheme = () => useContext(ThemeContext);

// 修改 handleSwitchChange 为 toggleTheme
export const toggleTheme = () => {
  const { toggleTheme } = useTheme();
  toggleTheme();
};

export const useScrollEffect = (setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolled]);
};