
import { Menu, Typography } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollEffect(setIsScrolled);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 right-0 transition duration-300 ease-in-out ${isScrolled ? "bg-gray-500" : "bg-gray-100"} p-4 flex w-full z-10 items-center justify-between`}>
        <Typography.Title level={3} style={{ margin: 0 }}>Start Here</Typography.Title>

        <Menu mode="horizontal" selectedKeys={['组件']} theme="light">
          <Menu.Item key="设计"><RouterLink to="/design">设计</RouterLink></Menu.Item>
          <Menu.Item key="研发"><RouterLink to="/development">研发</RouterLink></Menu.Item>
          <Menu.Item key="组件"><RouterLink to="/components">组件</RouterLink></Menu.Item>
          <Menu.Item key="博客"><RouterLink to="/blog">博客</RouterLink></Menu.Item>
          <Menu.Item key="资源"><RouterLink to="/resources">资源</RouterLink></Menu.Item>
          <Menu.Item key="国内镜像"><RouterLink to="/mirror">国内镜像</RouterLink></Menu.Item>
        </Menu>
      </header>
    </div>
  );
}

export default App;
