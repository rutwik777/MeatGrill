import React from "react";
import Footer from "../components/Footer";
import Content1 from "../components/Content1";
import CompanyCarousel from "../components/CompanyCarousel";
import Services from "../components/Services";
import OurTeam from "../components/OurTeam";
import Menu from "../components/Menu";
import Content2 from "../components/Content2";
import Newsletter from "../components/Subscibe";

const Home = () => {
  return (
    <>
      <Content1 />
      <Content2 />
      <Services />
      <Menu />
      <OurTeam />
      <CompanyCarousel />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
