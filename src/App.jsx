import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { AppContext } from "./context/AppContext";
import OwnerLayout from "./pages/Owner/OwnerLayout";
import AllHotels from "./pages/Owner/AllHotels";
import RegisterHotels from "./pages/Owner/RegisterHotels";
import AddRoom from "./pages/Owner/AddRoom";
import Bookings from "./pages/Owner/Bookings";

const App = () => {
  const ownerPath = useLocation().pathname.includes("owner");
  // Checks whether the current URL contains owner.
  // This is used to identify whether the user is inside the owner section of the website.

  const { owner } = useContext(AppContext);
  <Toaster/>
  return (
    <div className="w-full mx-auto">
      <Toaster />
      {/* Toaster is used here to display the notification messages to the user. */}

      {!ownerPath && <Navbar />}
      {/* Displays the Navbar on normal website pages, but hides it in the owner section. */}

      <Routes>
        {/* Routes define which page should be displayed for each URL. */}
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<SingleRoom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Route for the hotel owner section. */}
        <Route path="/owner" element={owner ? <OwnerLayout /> : <Login />}>
          {/* this part when owner log in they will show dashboard if not will show login page for log in */}

          <Route index element={owner ? <AllHotels /> : <Login />} />
          {/* Default page of the owner section. Displays AllHotels if the owner is logged in, otherwise displays the Login page. */}

          <Route
            path="register=hotel"
            element={owner ? <RegisterHotels /> : <Login />}
            //* Route for registering a new hotel.Only logged-in owners can access the RegisterHotels page.
          />

          <Route path="rooms" element={owner ? <AllHotels /> : <Login />} />
            
          {/* Route for viewing all rooms.Displays AllHotels if the owner is logged in, otherwise displays the Login page. */}

          <Route path="add-room" element={owner ? <AddRoom /> : <Login />} />
          {/* Route for adding a new room.Only logged-in owners can access the AddRoom page. */}

          <Route path="bookings" element={owner ? <Bookings /> : <Login />} />
          {/* Route for viewing hotel bookings. Only logged-in owners can access the Bookings page. */}
          
        </Route>
      </Routes>

      {/* Displays the Footer on normal website pages, but hides it in the owner section. */}
      {!ownerPath && <Footer />}
    </div>
  );
};

export default App;
