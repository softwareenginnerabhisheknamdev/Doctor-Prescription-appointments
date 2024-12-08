import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appoinment from "./pages/Appoinment";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import PayOnline from "./pages/PayOnline";
import Delete from "./pages/Delete";
import UserData from "./componenets/UserData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import { toast } from "react-toastify";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/my-profile" element={<MyProfile />}></Route>
        <Route path="/my-appointments" element={<MyAppointments />}></Route>
        <Route path="/appointment/:docId" element={<Appoinment />}></Route>
        <Route path="/pay-online" element={<PayOnline />}></Route>
        <Route path="/delete" element={<Delete />} />
        <Route path="/userdata" element={<UserData />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};
export default App;
