import React from "react";
import { motion } from "motion/react";
import { homePageData, assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <
      //React.Fragment is used here to wrap the main and form elements without adding extra nodes to the DOM.
    >
      <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        {/* First div */}
        <motion.div //motion.div is used here to animate the div elment.
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="text-heading font-bold text-3xl sm:text-5xl max-w-2xl leading-tight">
            Forgot busy work, <br /> start next vacation now
          </h1>
          <p className="text-paragraph mt-4 max-w-md text-sm sm:text-base leading-relaxed">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
            <motion.button //motion.button is used here to animate the button element.
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-primary text-white rounded-md py-2.5 text-sm font-medium flex item-center cursor-pointer px-6"
            >
              Show more
            </motion.button>
          </div>
          <div className="flex flex-wrap items-center gap-16 mt-8">
            {homePageData.map((item, index) => (
              //motion.div is used here to animate the div element.
              <motion.div //motion.div is used here to animate the div element.
                key={index} 
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center flex-col"
              >
                <img src={item.icon} alt="" className="w-6 h-6" />
                <div className="flex flex-items-center gap-1 mt-4">
                  <p className="text-paragraph">{item.value}</p>
                  <p className="text-paragraph">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second div */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: [0.95, 1.05, 0.95], x: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={assets.hero_img} alt=""  />
        </motion.div>
      </main>
      {/* form to search for hotels */}
      <form //this form is used to search for hotels based on destination, check-in and check-out dates, and number of guests.
        //Classname is used here to style the form element.bg-[#EAF1FF] sets the background color of the form to a light blue shade
        className="max-w-4xl w-full mx-auto bg-[#EAF1FF] text-gray-500 rounded-2xl px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
      >
        <div>
          <div className="flex items-center gap-2">
            <img //img tag here is used to set icons for the form tag
              src={assets.calendar_icon}
              alt=""
              className="w-4 h-4"
            />
            <label htmlFor="destinationInput">Select Location</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              //datalist and map function is used here for showing the city list suggestions
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calendar_icon} alt="" className="w-4 h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>
              <img src={assets.calendar_icon} alt="" className="w-4 h-4" />
        <div>
          <div className="flex items-center gap-2">
           
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>
            
        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Persons</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="mt-2 flex items-center justify-center gap-1 rounded-md bg-primary py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
         
          <span>Search</span>
        </button>
      </form>
    </>
  );
};

export default Hero;
