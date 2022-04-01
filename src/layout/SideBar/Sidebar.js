import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineRecycling } from "react-icons/md"
import Header from "../header/header";
import Footer from "../footer/Footer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const Page = styled.div`
    color: ${props => props.theme.textColor};
    margin-top:50px;
    transition: all .5s ease;
`;
const Icon = styled.div`
    color: ${props => props.theme.iconColor};
    font-size: 22px;
`;
const routes = [
  {
    path: "/",
    name: "Login",
    icon: <FaHome />,
  }, 
  {
    path: "/responsable-etablissement/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  }, 
   {
    path: "/responsable-etablissement/poubelles",
    name: "poubelles",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/responsable-etablissement/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/responsable-etablissement/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/responsable-etablissement/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/responsable-etablissement/map",
    name: "Map",
    icon: <FaUser />,
  },
  {
    path: "/responsable-etablissement/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/responsable-etablissement/calendrier",
    name: "calendrier",
    icon: <BiAnalyse />,
  },
  {
    path: "/responsable-etablissement/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/responsable-etablissement/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/responsable-etablissement/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/responsable-etablissement/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/responsable-etablissement/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },

];

const SideBar = ({ children } ,props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "70%",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
          <motion.div
            animate={{
              width: isOpen ? "300px" : "55px",
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar `}
          >  
              <motion.div
              animate={{
                marginLeft: isOpen ? "85%":"25%"  ,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                },
              }}
            > 
                <Icon><FaBars onClick={toggle} style={{fontSize:"28px", marginTop:"15%" }} /></Icon> 
            </motion.div>

            <div className="top_section">
          
            <MdOutlineRecycling style={{fontSize:"28px"}}/>
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    RE SCHOOL ECOLOGY
                  </motion.h1>
                  
                )}
              </AnimatePresence>          
            </div>

            <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                  />
                )}
              </AnimatePresence>
            </div>
            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeclassname="active"
                  >
                    <Icon>{route.icon}</Icon>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
       
        <main>        
            <Header/>        
            <Page>{children}</Page>
            <Footer/>
        </main>
    </>
  );
};

export default SideBar;