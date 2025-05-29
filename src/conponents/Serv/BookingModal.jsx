import React from "react";

const BookingModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-xl">
        <h2 className="mb-4 text-xl font-bold">Book {title}</h2>
        <input className="w-full p-2 mb-3 border rounded" type="text" placeholder="Your Name" />
        <input className="w-full p-2 mb-3 border rounded" type="email" placeholder="Email Address" />
        <input className="w-full p-2 mb-3 border rounded" type="date" />
        <button className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Confirm Booking</button>
        <button className="w-full mt-2 text-sm text-gray-600" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BookingModal;
