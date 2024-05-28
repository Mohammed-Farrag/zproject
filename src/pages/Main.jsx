/* eslint-disable react/prop-types */
import {  Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import { useEffect } from "react";
import AOS from 'aos';

function Main() {
    const { pathname } = useLocation();

    useEffect(() => {
        AOS.init();
    }, [])
    
    if (pathname === '/') return (<Home />);

    return (<Outlet />)
}

export default Main









// import Store from "./Store";
// import Contact from "./Contact";
// import News from "./News";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import About from "./About";
// import Gallery from "./Gallery";

    // if (pathname === '/') return (<Home />);
    // if (pathname === '/store') return (
    //     <>
    //         <Navbar />
    //         <Store />
    //         <Footer />
    //     </>
    // );
    // if (pathname === '/store') return (
    //     <>
    //         <Navbar />
    //         <Store />
    //         <Footer />
    //     </>
    // );
    // if (pathname === '/contact') return (
    //     <>
    //         <Navbar />
    //         <Contact />
    //         <Footer />
    //     </>);
    // if (pathname === '/news') return (
    //     <>
    //         <Navbar />
    //         <News />
    //         <Footer />
    //     </>
    // );
    // if (pathname === '/about') return (
    //     <>
    //         <Navbar />
    //         <About />
    //         <Footer />
    //     </>
    // );
    // if (pathname === '/gallery') return (
    //     <>
    //         <Navbar />
    //         <Gallery />
    //         <Footer />
    //     </>
    // );