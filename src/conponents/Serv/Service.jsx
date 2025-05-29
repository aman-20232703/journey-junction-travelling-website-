import React from "react";
import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { Link } from "react-router-dom";
import Darjeeling_poster from "../../assets/poster/Darjeeling_poster.jpg";
import Manali_poster from "../../assets/poster/Manali_poster.jpg";
import JAgannathpuri_poster from "../../assets/poster/JAgannathpuri_poster.jpg";

const Service = () => {
  const destinations = [
    {
      title: "Darjeeling Tour",
      main: "Darjeeling tourism offers a perfect blend of natural beauty...",
      image: Darjeeling_poster,
      link: "/darjeeling",
    },
    {
      title: "Manali Tour",
      main: "Manali offers a mix of snow adventures, culture, and scenery.",
      image: Manali_poster,
      link: "/manali",
    },
    {
      title: "Jagannath Puri Tour",
      main: "Famous for its temple, beach, and the grand Rath Yatra.",
      image: JAgannathpuri_poster,
      link: "/puri",
    },
  ];

  return (
    <motion.div
      id="services"
      className="p-10 md:p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-center text-black md:text-4xl">
        Services
      </h1>
      <motion.div
        className="flex flex-wrap justify-center gap-5 px-8 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {destinations.map((dest, index) => (
          <Link key={index} to={dest.link}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <DestinationCard
                title={dest.title}
                main={dest.main}
                image={dest.image}
              />
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
