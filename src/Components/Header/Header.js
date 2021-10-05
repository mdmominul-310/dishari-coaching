import { Container, Nav, Navbar, Badge, Dropdown, Button, } from "react-bootstrap";
import logo from '../../images/logo.PNG';
import item from '../../images/add.png'
import './Header.css';
import { NavLink } from "react-router-dom";
import cartIcon from '../../images/shopping-cart.png'
import React, { useContext, } from "react";
import { CartItem } from "../../App";
import Cart from "./Cart/Cart";
import totalIcon from '../../images/total.png';
import taka from '../../images/taka.png'
import OrderModal from "../OrderModal/OrderModal";



const Header = () => {
//   // use cart item 
const cart=useContext(CartItem);
// calculate cart item price total 
let total=0;
 for(const courseItem of cart){
      total=courseItem.price+total;
      }

 const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="sticky-top">
      {/* navigation item */}
      <Navbar collapseOnSelect expand="lg" bg="success" variant="light" className="shadow-lg">
    <Container>
      <Navbar.Brand href="#home"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <NavLink to="/home" className="me-auto d-flex align-items-center nav-btn">
        <img className="w-25" src={logo} alt="" /> <h2 className="text-light">Dishari</h2>
      </NavLink>
    <Nav>
    <NavLink   className="nav-btn btn btn-success" to="/home">Home</NavLink>
     <NavLink className="nav-btn btn btn-success" to="/services"> Services</NavLink>
     <NavLink className="nav-btn btn btn-success" to ="about">About</NavLink>
     <NavLink className="nav-btn btn btn-success" to="/contactus"> Contact Us</NavLink>
     {/*------------------
      cart item view
      -------------------- */}
     <Dropdown id="dropdown-basic" >
       <Dropdown.Toggle variant="success">
          <img src={cartIcon} alt="" />
          <Badge bg="primary"> {cart.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu className="cart-drop">
       <div className="shadow-lg p-3  bg-white rounded">
         <Badge bg="secondary" className="w-100"><img src= {item} alt="" />{cart.length}</Badge>
         <div>
           {
             cart.map(course=> <Cart cart={course}></Cart>)
           }
           <div className="d-flex justify-content-between border border">
           <img src={totalIcon} alt="" />
           <h3> <img src={taka} alt="" /> {total} </h3>
            </div>
            <div className="w-100"> <Button className="w-100" onClick={() => setModalShow(true)}>Placeorder</Button></div>
          
         </div>
      </div>
      </Dropdown.Menu>
      </Dropdown>
           </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<OrderModal 
      show={modalShow}
        onHide={() => setModalShow(false)}></OrderModal>
 </div>
  );
};

export default Header;