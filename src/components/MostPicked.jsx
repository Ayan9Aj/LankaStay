
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const MostPicked = () => {
  const { hotelData } = useContext(AppContext);

  console.log("Hotel Data:", hotelData);

  return (
    <div className="py-16">
      <h1 className="text-heading text-3xl font-semibold text-center mx-auto mt-8">
        Most Picked Hotels
      </h1>

      <p className="text-paragraph text-sm text-center max-w-lg mx-auto mt-2">
        Explore our top-rated rooms, loved by guests for comfort and location.
      </p>

      <div
      //this div className contains the animation set for showing the hotels in the home page 
      className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">
        {hotelData.map((item, index) => (
          //hotelData Maps through the hotelData array to display each hotel's information
          <motion.div
            //this motion is used to animate the hotel images in the homepage
            key={index}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="relative group rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              // Displays the image of the current hotel.
              src={item.image}
              alt=""
              className="size-56 object-cover object-top"
            />
            <div
            //This div creates a hover overlay on each hotel image
              className="absolute inset-0 flex flex-col justify-end p-4 
            text-white bg-black/50 opacity-0 group-hover:opacity-100 
            transition-all duration-100"
            >
              <h1 
              //displays the hotel name
              className="text-lg font-medium">{item.name}</h1>
              <p
              //displays the address
              className="text-sm">{item.address}</p>
              <h1
              //displays the price 
              className="text-lg font-medium">{item.price}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MostPicked;
