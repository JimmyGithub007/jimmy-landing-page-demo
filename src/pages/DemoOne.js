import { createContext, useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FooterDetail from "../components/FooterDetail";
import Features from "../components/Features";
import Teams from "../components/Team";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Client from "../components/Client";
import Trial from "../components/Trial";

export const MenuContext = createContext();

const DemoOne = () => {
    const [menuId, setMenuId] = useState("");
    const [scrollY, setScrollY] = useState(0);
  
    const featuresRef = useRef();
    const teamRef = useRef();
    const pricingRef = useRef();
    const contactRef = useRef();
  
    const handleScrollChange = () => {
      setScrollY(window.scrollY);
      const offsetTop = window.scrollY + 48;
      if (offsetTop >= contactRef.current.offsetTop) {
        setMenuId("contact");
      } else if (offsetTop >= pricingRef.current.offsetTop) {
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
      const id = window.location.hash.substr(1);
      if(id) {
          const anchor = document.getElementById(id);
          if(anchor) {
              setMenuId(id);
              anchor.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
          } else {
              setMenuId("home");
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
              });
          }
      }
    }, []);

    return (<MenuContext.Provider value={{ menuId, scrollY, featuresRef, teamRef, pricingRef, contactRef }}>
        <div className="grid bg-violet-50">
          <Header />
          <Home />
          <Client />
          <Features />
          <Teams />
          <Pricing />
          <Trial />
          <Contact />
          <FooterDetail />
          <Footer />
        </div>
      </MenuContext.Provider>)
}

export default DemoOne;