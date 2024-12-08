import React from "react";
import Header from "../componenets/Header";
import SpecialityMenu from "../componenets/SpecialityMenu";
import TopDoctors from "../componenets/TopDoctors";
import Banner from "../componenets/Banner";
// import Mode from '../componenets/Mode'
import { toast } from "react-toastify";

const Home = () => {
  return (
    <div>
      {/* {} toast.success("Create an account") */}
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      {/* <Mode/> */}
    </div>
  );
};

export default Home;
