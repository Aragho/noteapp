import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const Layout = ()=>{
    return(
        <>
        <Header />
        <Outlet/>
        <SideBar />
        <Footer />
        </>
    )

};
export default Layout;