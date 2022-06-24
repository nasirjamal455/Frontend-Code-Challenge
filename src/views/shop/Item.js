import React from "react";
import { connect } from "react-redux";
import { addCartItems } from "../../redux/actions/shopAction";
const Item = ({ item, addCartItems }) => {
  const { name, img, price } = item;
  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card h-100">
        <div className="wrapper">
          <img src={img} className="card-img-top" height="200" width="200" alt={name} />
        </div>
        <div className="card-body bg-dark">
          <div className="row">
            <div className="col-6">
              <h5 className="card-title text-nowrap text-white">{name}</h5>
            </div>
            <div className="col-6 text-right">
              <h5 className="card-title text-white">PKR. {price}</h5>
            </div>
          </div>
          <button
            onClick={() => addCartItems(item)}
            className="btn btn-sm btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
const stateMapToProps = (state) => ({
  cartItems: state.shop.cartItems,
});
export default connect(stateMapToProps, { addCartItems })(Item);
