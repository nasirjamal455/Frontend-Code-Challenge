import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = ({cartCount}) => {
  return (
    <div className="container-fluid bg-dark">
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container row col-sm-8 mx-auto">
        <Link class="navbar-brand" to="/">
         Shop
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/items">
                Items
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/add-item">
              Add Item
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link className="nav-link text-white" to="/checkout">Cart({cartCount?.length})</Link>

            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};
const stateMapToProps = (state)=>({
  cartCount : state.shop.cartItems
})
export default connect(stateMapToProps)(Navbar);
