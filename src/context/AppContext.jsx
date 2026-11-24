
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsData,roomsData} from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  //AppContextProvider acts as a central storage and control centre for your entire website.
  // Instead of passing user information, owner information, and navigation functions through multiple components using props,
  // developer store them in one shared context. Any component can access them using useContext(AppContext).

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [owner, setOwner] = useState(null);
  const [hotelData, setHotelData] = useState([]);
  const [roomData, setRoomsData] = useState([]);

  // hotelData Stores the hotel information that will be displayed throughout the website.
  // (for prototype frontend only real data will fetch from database)

  const fetchHotelsData = () => {
    // Fetches hotel data and updates the hotelData state.
    // Currently using local assets for frontend testing instead of a backend database. After backend data will come from backend.
    setHotelData(hotelsData);
  };
  const fetchRoomsData = () => {
    // Fetches room data and updates the roomData state.
    // Currently using local assets for frontend testing instead of a backend database. After backend data will come from backen.
    setRoomsData(roomsData);
  };

  useEffect(() => {
    //fetching the hotel data when website load
    fetchHotelsData();
    ////fetching the room data when website load
    fetchRoomsData();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    owner,
    setOwner,
    hotelData,
    setHotelData,
    roomData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
