import { useState, useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Smart from './components/Smart';
import PLC from './components/PLC';
import Medical from './components/medical';
import Car from './components/car';
import Consumption from './components/consumption';
import Internet from './components/Internetl';



import {
  Home,
  Briefcase,
  Layers,
  Cpu,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Code,
  CircuitBoard,
  FileText,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceData = [
    { name: 'PCB设计', value: 85 },
    { name: '原理图设计', value: 78 },
    { name: '电路仿真', value: 65 },
    { name: 'EMC设计', value: 72 },
  ];

  const projectData = [
    { name: '消费电子', projects: 42 },
    { name: '工业控制', projects: 28 },
    { name: '医疗设备', projects: 15 },
    { name: '汽车电子', projects: 20 },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      <Routes>
        <Route path="/Smart" element={<Smart />} />
        <Route path="/PLC" element={<PLC />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Consumption" element={<Consumption />} />
        <Route path="/Internet" element={<Internet />} />
      </Routes>
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center ml-[-150px]">
            {/* 替换为插入图片的代码 */}
            <img
              src="/logo2.png"
              alt="公司logo"
              className="text-blue-600 mr-20 h-10 w-30"
            />
            <span className="text-xl font-bold text-blue-800">广东矽联科电子科技有限公司</span>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: '首页', icon: <Home size={18} className="mr-1" /> },
              { id: 'services', label: '服务', icon: <Layers size={18} className="mr-1" /> },
              { id: 'projects', label: '案例', icon: <Briefcase size={18} className="mr-1" /> },
              { id: 'about', label: '关于', icon: <Users size={18} className="mr-1" /> },
              { id: 'contact', label: '联系', icon: <Mail size={18} className="mr-1" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center px-2 py-1 rounded-md transition-colors ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-4 pb-4 shadow-md"
          >
            <div className="flex flex-col space-y-2">
              {[
                { id: 'home', label: '首页', icon: <Home size={18} className="mr-2" /> },
                { id: 'services', label: '服务', icon: <Layers size={18} className="mr-2" /> },
                { id: 'projects', label: '案例', icon: <Briefcase size={18} className="mr-2" /> },
                { id: 'about', label: '关于', icon: <Users size={18} className="mr-2" /> },
                { id: 'contact', label: '联系', icon: <Mail size={18} className="mr-2" /> },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 5 }}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'
                    }`}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* 首页 */}
      <section id="home" className="relative py-20 h-screen flex items-center justify-center">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/PCB4.png" // 替换为您想要的背景图片路径
            alt="PCB设计背景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* 半透明遮罩 */}
        </div>

        {/* 内容 */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            专业的<span className="text-blue-300">PCB设计</span>与<span className="text-blue-300">组件库</span>维护管理
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            小到助听器，大到服务器的各种尺寸，各种层数，无论是HDI还是硬软板，我们都是专业的Candence Allegro PCB 设计。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            专业解读元器件厂商规格书，参照IPC-7351规范和多年设计经验创建各种类型元器件logic symol和Footprint.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center transition-colors"
            >
              了解服务 <ArrowRight className="ml-2" size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md flex items-center transition-colors"
            >
              联系我们 <Phone className="ml-2" size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 服务 */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Layers className="mr-2 text-blue-600" size={28} />
              我们的服务
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              提供从概念到成品的全方位电子设计服务，确保您的产品在性能、可靠性和成本之间达到最佳平衡。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CircuitBoard size={32} className="text-blue-600" />,
                title: "PCB设计",
                description: "提供多层板、高速PCB、HDI板等专业设计服务，确保信号完整性和EMC性能。",
                features: ["4-32层板设计", "阻抗控制", "高速信号处理", "EMC优化"]
              },
              {
                icon: <Code size={32} className="text-blue-600" />,
                title: "原理图设计",
                description: "专业的原理图设计服务，确保电路逻辑正确性和可制造性。",
                features: ["模块化设计", "设计规范检查", "BOM生成", "设计评审"]
              },
              {
                icon: <Cpu size={32} className="text-blue-600" />,
                title: "电路仿真",
                description: "先进的电路仿真分析，提前发现并解决潜在设计问题。",
                features: ["信号完整性分析", "电源完整性分析", "热分析", "EMC仿真"]
              },
              {
                icon: <FileText size={32} className="text-blue-600" />,
                title: "设计咨询",
                description: "提供从概念到量产的全程技术支持和咨询服务。",
                features: ["设计评审", "DFM分析", "成本优化", "技术培训"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">服务能力分布</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#3B82F6" name="服务能力指数" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 项目案例 */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Briefcase className="mr-2 text-blue-600" size={28} />
              成功案例
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们为各行业客户提供了专业的PCB设计和电子工程解决方案，以下是部分典型案例。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "智能家居控制器",
                description: "8层HDI板设计，集成Wi-Fi/BLE模块，实现低功耗高性能控制。",
                image: "https://s.coze.cn/t/HPNF5TAEcEk/",
                link: "/Smart"
                // link: "/WeclomePage"
              },
              {
                title: "工业PLC模块",
                description: "16层板设计，支持多种工业通信协议，EMC性能优异。",
                image: "https://s.coze.cn/t/BjYEu-0X3Mw/",
                link: "/PLC"
              },
              {
                title: "医疗监护设备",
                description: "高精度模拟前端设计，通过医疗设备EMC认证。",
                image: "https://s.coze.cn/t/YlzzbBpmlU4/",
                link: "/medical"
              },
              {
                title: "汽车电子控制单元",
                description: "符合AEC-Q100标准，支持CAN总线通信，耐高温设计。",
                image: "https://s.coze.cn/t/Nxfd5FZUhQg/",
                link: "/Car"
              },
              {
                title: "消费电子主板",
                description: "高集成度设计，优化成本同时保证性能。",
                image: "https://s.coze.cn/t/aBZJ5o60jLs/",
                link: "/Consumption"
              },
              {
                title: "物联网网关",
                description: "多协议支持，低功耗设计，长期稳定运行。",
                image: "/PCB5.png",
                link: "/Internet"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    查看详情 <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">行业项目分布</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="projects" fill="#10B981" name="项目数量" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Users className="mr-2 text-blue-600" size={28} />
              关于我们
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              广东矽联科电子科技有限公司是一家专注于电子设计服务的专业技术公司。
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-gray-800 mb-4"
              >
                公司简介
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-4"
              >
                广东矽联科电子科技有限公司成立于2019年12月，专注于PCB设计、设计资管管理及设计软件二次开发等专业服务。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-4"
              >
                超过15人的工程师团队响应，人均经验6年以上，拥有丰富的电子设计经验，同时拥有国内领先的设计软件和设计平台。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-4"
              >
                多种PCB产品设计经验，IPC CID+资深专家把关，确保产品设计的质量和性能。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-4"
              >
                工程师接触最多的就是各种数据，我们针对大数据提炼和处理进行了Excel VBA二次开发，极大提升工作效率。
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600"
              >
                Skill作为Cadence专有语言，学习的人凤毛麟角，我们拥有百万行代码量的工程师，可快速开发各种针对Candence产品的程序，提升工程师效率。
              </motion.p>
            </div>
            <div className="md:w-1/2">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="/PCB3.png"
                alt="公司环境"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "专业团队",
                description: "拥有15+资深电子工程师，平均6年以上行业经验",
                icon: <Users size={32} className="text-blue-600" />
              },
              {
                title: "丰富经验",
                description: "累计完成500+项目，覆盖多个行业领域",
                icon: <Briefcase size={32} className="text-blue-600" />
              },
              {
                title: "先进设备",
                description: "配备高性能工作站和专业设计软件",
                icon: <Cpu size={32} className="text-blue-600" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Mail className="mr-2 text-blue-600" size={28} />
              联系我们
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              如有任何问题或需求，欢迎随时与我们联系。
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md mb-8"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-600">电话咨询</p>
                      <p className="text-gray-800 font-medium">+86(0)19966328851</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-600">电子邮件</p>
                      <p className="text-gray-800 font-medium">Stephen_Mai@silimco.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-600">公司地址</p>
                      <p className="text-gray-800 font-medium">广东省中山市火炬开发区德众广场</p>


                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="/dezhong2.jpg"
                alt="公司地址"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md h-full"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">发送消息</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">邮箱</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">电话</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的电话"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">留言内容</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的留言内容"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full transition-colors"
                  >
                    发送消息
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">

            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/logo2.png"
                alt="公司logo"
                className="text-blue-600 mr-2 h-10"
              />
              <span className="text-lg font-semibold text-gray-800">广东矽联科电子科技有限公司</span>
            </div>

            <div className="text-gray-600 text-sm">
              <p>© 2023 广东矽联科电子 版权所有</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">


          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      <Routes>
        <Route path="/Smart" element={<Smart />} />
        
        <Route path="/PLC" element={<PLC />} />
        <Route path="/*" element={<MainContent />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Consumption" element={<Consumption />} />
        <Route path="/Internet" element={<Internet />} />
      </Routes>
    </div>
  );
};

export default App;




