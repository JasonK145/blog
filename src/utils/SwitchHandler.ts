import { useEffect } from "react";
export const handleSwitchChange = (checked: boolean) => {
  alert(`Switch is ${checked ? 'on' : 'off'}`);
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