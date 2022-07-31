import { useState } from "react"
import './HomeNavBar.css';

const HomeNavBar =(props)=>{
    return (
        <nav className="HomeNavBar">
                <a href="#" className="navbar-brand">Super Shop</a>
                <ul className="navbar-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                </ul>
                <button className="cart-section" onClick={()=>props.changeCheckout()}>
                   <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Cart 
                    <span className="cartCount">{props.items.length}</span>
                </button>
        </nav>
    )
}

export default HomeNavBar;