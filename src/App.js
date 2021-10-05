import React, { createContext, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Services from './Components/Services/Services';
// context for cart 
export const CartItem=createContext("cart");
// handle cart 
function App() {
  const[cart,setCart]=useState([]);
  const handleCart=(course)=>{
    const newCart=[...cart,course];
    setCart(newCart);
     }
  return (
    <div className="App">
      <CartItem.Provider value={cart}>
          <Router>
     <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home handleCart={handleCart}></Home>
         </Route>
         <Route path="/home">
           <Home handleCart={handleCart}></Home>
         </Route>
         <Route path="/services">
           <Services handleCart={handleCart}></Services>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/contactus">
           <ContactUs></ContactUs>
         </Route>
         <Route>
           <Notfound></Notfound>
         </Route>
       </Switch>
       <Footer></Footer>
            </Router>
        </CartItem.Provider>
       </div>
  );
}

export default App;
