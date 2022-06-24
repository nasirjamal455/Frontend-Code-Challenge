import React from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/actions/shopAction";
const Checkout = ({ cartItems, removeCartItem }) => {
  console.log("cartITems", cartItems);
  return (
    <React.Fragment>
      <h5 className="mx-auto text-uppercase font-weight-bold my-4">
        Items in the Cart
      </h5>
      <table className="table my-1">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((cartItem) => (
            <tr>
              <td>{cartItem.name}</td>
              <td>{cartItem.price}</td>
              <td>
                <img
                  src={cartItem.img}
                  height="40"
                  width="40"
                  className="img"
                  alt=""
                />
              </td>
              <td>{cartItem.quantity}</td>
              <td className="close" onClick={() => removeCartItem(cartItem)}>
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.shop.cartItems,
});
export default connect(mapStateToProps, { removeCartItem })(Checkout);
