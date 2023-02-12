//import { Link } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import FooterDetail from "../components/FooterDetail";
import Header from "../components/Header2";
import Home from "../components/Home2";
import Pricing from "../components/Pricing2";
import QuestionAnswer from "../components/QuestionAnswer";
import Trial from "../components/Trial";

export const MenuContext = createContext();

const DemoTwo = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScrollChange = () => {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return function cleanup() {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  useEffect(() => {
    const id = window.location.hash.substr(1);
    if(id) {
        const anchor = document.getElementById(id);
        if(anchor) {
            anchor.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }
  }, []);

  return (<MenuContext.Provider value={{ scrollY }}>
    <div className="grid bg-sky-50">
      <Header />
      <Home />
      <Pricing />
      <Trial />
      <QuestionAnswer />
      <FooterDetail />
      <Footer />
    </div>
  </MenuContext.Provider>)
}

export default DemoTwo;