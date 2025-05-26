import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="px-6 py-16 bg-gray-100 md:px-20">
    <h2 className="mb-10 text-3xl font-bold text-center md:text-5xl text-slate-800">
      Contact Us
    </h2>

    <form className="max-w-3xl p-8 mx-auto space-y-6 bg-white shadow-md rounded-xl">
      <div>
        <label htmlFor="name" className="block mb-2 font-semibold text-slate-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-semibold text-slate-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-semibold text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows="5"
          placeholder="Your message..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 font-semibold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
      >
        Send Message
      </button>
    </form>
  </div>
  )
}

export default Contact