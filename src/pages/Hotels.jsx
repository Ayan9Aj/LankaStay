import { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react";

const Hotels = () => {
  const {hotelData} = useContext(AppContext);
  return (
    <div className="py-24 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-heading my-8 px-2 text-center">
        All Hotels
      </h1>
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
  )
}

export default Hotels
