import React from "react";
import about from "../../assets/about.jpg";
import { IoArrowForward } from "react-icons/io5";

const AboutItem = ({ title, description }) => (
  <li className="flex gap-3 p-2 py-4 transition rounded-lg hover:bg-white hover:bg-opacity-10">
    <IoArrowForward size={30} className="mt-1 shrink-0" />
    <div className="w-full md:max-w-md">
      <h1 className="text-xl font-semibold leading-normal md:text-2xl">
        {title}
      </h1>
      <p className="text-sm leading-tight md:text-md">{description}</p>
    </div>
  </li>
);

function About() {
  return (
    <div id="about" className="items-center p-12 mx-0 overflow-hidden text-black bg-[#e6eeef] rounded-lg shadow-xl md:flex md:flex-wrap md:justify-center md:mx-20 bg-opacity-30">
      <div>
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">About</h2>
        <div className="flex flex-col items-center md:flex-row">
          <img
            className="w-full md:w-[750px] md:h-[550px] mb-6 md:mb-0 md:mr-6 rounded-md object-cover"
            src={about}
            alt="Scenic travel destination"
          />

          <ul className="space-y-4 md:space-y-0">
            <AboutItem
              title="Adventure-Focused About Us"
              description="At Journey Junction, we believe travel is more than just a trip—it's an adventure waiting to be explored. Whether you're hiking through misty mountains, discovering hidden city gems, or soaking up the sun on a remote beach, we're here to guide your journey. With expert tips, curated travel guides, and exclusive deals, we make every trip unforgettable. Join us and let's embark on the adventure of a lifetime!"
            />
            <AboutItem
              title="Family & Budget-Friendly About Us"
              description="Traveling should be exciting, affordable, and stress-free! Journey Junction is your go-to travel companion for budget-friendly getaways, family vacations, and solo adventures. We offer smart travel hacks, budget-friendly destination ideas, and trusted recommendations to help you explore the world without breaking the bank. Your dream trip is just a click away—start planning today!"
            />
            <AboutItem
              title="Luxury & Experience-Based About Us"
              description="At Journey Junction, we specialize in turning travel dreams into reality. Whether you crave a luxurious escape, a cultural immersion, or a once-in-a-lifetime experience, we curate the finest destinations, top-tier accommodations, and personalized travel itineraries. Indulge in seamless journeys, insider recommendations, and travel expertise that redefine the way you explore the world. Your next extraordinary adventure starts here!"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;