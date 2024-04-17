import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content2 from "./components/Content2";
import OurTeam from "./components/OurTeam";
import CompanyCarousel from "./components/CompanyCarousel";
import Services from "./components/Services";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Content2 />
              <Footer />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <OurTeam />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Navbar />
              <Menu />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
