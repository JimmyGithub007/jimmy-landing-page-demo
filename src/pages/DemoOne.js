import { createContext, useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FooterDetail from "../components/FooterDetail";
import Features from "../components/Features";
import Teams from "../components/Team";
import Home from "../components/Home";

export const MenuContext = createContext();

const DemoOne = () => {
    const [menuId, setMenuId] = useState("");
    const [scrollY, setScrollY] = useState(0);
  
    const featuresRef = useRef();
    const teamRef = useRef();
    const pricingRef = useRef();
  
    const handleScrollChange = () => {
      setScrollY(window.scrollY);
      const offsetTop = window.scrollY + 48;
      if (offsetTop >= pricingRef.current.offsetTop) {
        setMenuId("pricing");
      } else if (offsetTop >= teamRef.current.offsetTop) {
        setMenuId("team");
      } else if (offsetTop >= featuresRef.current.offsetTop) {
        setMenuId("features");
      } else if (offsetTop < featuresRef.current.offsetTop) {
        setMenuId("home");
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScrollChange);
      return function cleanup() {
        window.removeEventListener("scroll", handleScrollChange);
      };
    }, []);

    useEffect(() => {
        setMenuId("home");
    }, []);

    return (<MenuContext.Provider value={{ menuId, scrollY, featuresRef, teamRef, pricingRef }}>
        <div className="grid">
          <Header />
          <Home />
          <Features />
          <Teams />
          <Pricing />
          <FooterDetail />
          <Footer />
        </div>
      </MenuContext.Provider>)
}

export default DemoOne;