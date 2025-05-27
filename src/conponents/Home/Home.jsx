import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-scroll";
import home from "../../assets/home.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="flex items-center w-full min-h-screen p-10 bg-cover md:p-20"
      style={{ backgroundImage: `url(${home})` }}
    >
      <motion.div
        className="max-w-2xl text-slate-800 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold leading-normal tracking-tighter md:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to Journey Junction
        </motion.h1>

        <motion.p
          className="mt-4 text-sm tracking-tight md:text-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore the world with expert guides
        </motion.p>

        <Link to="services" smooth={true} duration={800} offset={-70}>
          <motion.button
            className="px-3 py-2 mt-6 text-sm font-semibold text-white duration-300 bg-green-400 md:text-lg md:py-2 md:px-4 hover:opacity-85 hover:scale-105 rounded-3xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Services
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
