// PuriPage.jsx
import React, { useState } from "react";
import BookingModal from "../Serv/BookingModal";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import jagannathTemple from "../../assets/puri/jagannathTemple.jpg";
import puriBeach from "../../assets/puri/puriBeach.jpg";
import rathYAtra from "../../assets/puri/rathYatra.jpg";
import konarkSunTemple from "../../assets/puri/konarkSunTemple.webp";

const places = [
  {
    name: "Jagannath Temple",
    image: jagannathTemple,
    description:
      "One of the Char Dham pilgrimage sites dedicated to Lord Jagannath.",
  },
  {
    name: "puriBeach",
    image: puriBeach,
    description: "A serene beach ideal for sunrise views and sand art.",
  },
  {
    name: "Chilika Lake",
    image: rathYAtra,
    description:
      "Asia’s largest brackish water lagoon, home to migratory birds.",
  },
  {
    name: "Konark Sun Temple",
    image: konarkSunTemple,
    description:
      "A UNESCO World Heritage Site known for its stunning architecture.",
  },
];

const PuriPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="p-6 md:p-12">
      <h1 className="mb-10 text-3xl font-bold text-center text-blue-800 md:text-5xl">
        Explore Puri
      </h1>

      <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-gray-700">
        Puri, a coastal gem in Odisha, is steeped in spirituality, art, and
        coastal charm. Here's a guide to its must-visit attractions.
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
              <h2 className="mb-2 text-xl font-semibold text-blue-700">
                {place.name}
              </h2>
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
        title="Puri Tour"
      />
    </div>
  );
};

export default PuriPage;
