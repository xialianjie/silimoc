import React from 'react';
import { motion } from 'framer-motion';
import {useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              src="https://s.coze.cn/t/HPNF5TAEcEk/"
              alt="公司展示"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-blue-600 mb-6">工业PLC模块</h1>
              <p className="text-gray-700 text-lg mb-6">
              工业PLC是自动化控制系统的核心设备，负责采集传感器信号、执行逻辑运算，并输出控制指令驱动执行器
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">通过多层板布局优化、信号隔离（光耦/磁耦）及EMC防护设计，满足IEC 61000-4标准，轻松应对电磁干扰、浪涌冲击。</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">冗余电源设计+散热优化，MTBF（平均无故障时间）超10万小时。</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">协助通过CE、FCC、UL等认证，缩短产品上市周期。</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex gap-4" // 添加flex布局让按钮并排
              >
               
                <button
                  onClick={() => {
                    navigate('/');
                    // 延迟300ms确保页面加载完成后滚动
                    setTimeout(() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 300);
                  }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  返回首页
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;