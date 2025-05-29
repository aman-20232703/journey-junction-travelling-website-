// ManaliPage.jsx
import React, { useState } from "react";
import BookingModal from "../Serv/BookingModal";
import { motion } from "framer-motion";

import hadimbaTemple from "../../assets/manali/hadimbaTemple.jpeg"
import solangVally from "../../assets/manali/solangVally.jpg"
import rothangPass from "../../assets/manali/rohtangPass.jpeg"
import MallRoad from "../../assets/manali/MallRoad.jpg"

const places = [
  {
    name: "Solang Valley",
    image: solangVally,
    description: "A popular destination for adventure sports and scenic beauty.",
  },
  {
    name: "Rohtang Pass",
    image: rothangPass,
    description: "Gateway to Lahaul and Spiti with breathtaking snow views.",
  },
  {
    name: "Hidimba Devi Temple",
    image: hadimbaTemple,
    description: "An ancient cave temple surrounded by cedar forest.",
  },
  {
    name: "Mall Road",
    image: MallRoad,
    description: "The vibrant heart of Manali for shopping and local cuisine.",
  },
];

const ManaliPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="p-6 md:p-12">
      <h1 className="mb-10 text-3xl font-bold text-center text-blue-800 md:text-5xl">
        Explore Manali
      </h1>

      <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-gray-700">
        Manali, a charming hill station in Himachal Pradesh, offers snow-capped mountains,
        adventure, and spiritual peace. Here's what you should explore.
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
        title="Manali Tour"
      />
    </div>
  );
};

export default ManaliPage;
