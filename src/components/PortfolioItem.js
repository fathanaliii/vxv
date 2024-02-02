// src/components/PortfolioItem.js
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioItem = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 border mb-4"
    >
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default PortfolioItem;
