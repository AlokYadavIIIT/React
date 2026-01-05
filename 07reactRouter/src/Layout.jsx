import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
// Outlet : outlet is the part of web page is changable 
//   by turning page (via opening another file) except this 
//      like <Header/> , <Footer/> etc. other part do not change.
function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout