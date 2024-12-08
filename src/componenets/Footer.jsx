import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left  */}
        <div>
          <img
            className="mb-5 w-40"
            onClick={() => navigate("/")}
            src={assets.logo}
            alt=""
          />

          <p className="w-full  md:w-2/3  text-gray-800 leading-6 font-bold ">
            Hello 💼💼 Everyone This is a modern web application where you can
            interact with some of the Expert Doctors and also you book a
            appointment with them if you have any fever or sicknees then you can
            book a appointment with them while staying in your home town with
            less amount of money
          </p>
        </div>

        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5  ">COMPANY </p>
          <ul className="flex flex-col gap-4 text-gray-800">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right  */}
        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-800">
            <li> +917024073871</li>
            <li>abhisheknamdev9171@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" py-5 text-sm text-center">
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
