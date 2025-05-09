import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-white rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">欢迎光临</h1>
        <p className="text-gray-600">广东矽联科电子科技有限公司</p>
      </motion.div>
    </div>
  );
};

export default WelcomePage;