// DarjeelingPage.jsx
import React, { useState } from "react";
import BookingModal from "../Serv/BookingModal";
import { motion } from "framer-motion";

import tiger_hill from "../../assets/darjeeling/tiger_hill.jpg";
import batasiaLoop from "../../assets/darjeeling/batasiaLoop.webp"
import peace_pagoda from "../../assets/darjeeling/peace_pagoda.jpg";
import toy_train from "../../assets/darjeeling/toy_train.jpg";

const places = [
  {
    name: "Tiger Hill",
    image: tiger_hill,
    description: "Famous for its stunning sunrise views over Mount Kanchenjunga.",
  },
  {
    name: "Batasia Loop",
    image: batasiaLoop,
    description: "A unique railway loop with a panoramic view of the hills.",
  },
  {
    name: "Peace Pagoda",
    image: peace_pagoda,
    description: "A Buddhist stupa promoting peace and spirituality.",
  },
  {
    name: "Darjeeling Himalayan Railway",
    image: toy_train,
    description: "A UNESCO World Heritage Site offering a nostalgic toy train ride.",
  },
];

const DarjeelingPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="p-6 md:p-12">
      <h1 className="mb-10 text-3xl font-bold text-center text-blue-800 md:text-5xl">
        Explore Darjeeling
      </h1>

      <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-gray-700">
        Darjeeling, nestled in the Himalayan foothills, is known for its tea, breathtaking views,
        and colonial charm. Discover the top spots you can’t miss during your visit.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {places.map((place) => (
          <motion.div
            key={place.name}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden bg-white shadow-md rounded-2xl"
          >
            <img
              src={place.image}
              alt={place.name}
              className="object-cover w-full h-60"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-blue-700">{place.name}</h2>
              <p className="text-sm text-gray-600">{place.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBookingOpen(true)}
          className="px-6 py-3 font-bold text-white bg-blue-600 shadow-lg hover:bg-blue-700 rounded-xl"
        >
          Book Now
        </motion.button>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Darjeeling Tour"
      />
    </div>
  );
};

export default DarjeelingPage;
