import React from 'react'
import Navbar from "./compounents/Navbar"
import Home from "./compounents/Home"
import Shop from "./compounents/Shop"
import Product from "./compounents/Product"
import Review from "./compounents/Review"
import Special from "./compounents/Special"
import Footer from "./compounents/Footer"
import { Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <Route exact path="/">
    <Navbar/>
    <Home/>
    <Shop/>
    <Product/>
   
    <Special/>
    <Review/>
    <Footer/>
    </Route>
      
      <Route exact path="/shop">
      <Navbar/>
      <Shop/>
      <Footer/>
      </Route>


      <Route exact path="/product">
      <Navbar/>
      <Product/>
      <Footer/>
      </Route>


      <Route exact path="/special">
      <Navbar/>
     <Special/>
      <Footer/>
      </Route>

      <Route exact path="/review">
      <Navbar/>
    <Review/>
      <Footer/>
      </Route>

    
    </>
  )
}

export default App
