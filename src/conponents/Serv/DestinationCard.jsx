import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const DestinationCard = ({ title, main, image }) => {
  const truncatedText = main.length > 100 ? main.slice(0, 100) + "..." : main;

  return (
    <motion.div
      className="overflow-hidden bg-white shadow-md w-72 rounded-xl"
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="object-cover w-full h-40"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-blue-700">{title}</h2>
        <p className="text-sm text-gray-600">{truncatedText}</p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
