import React, { useState } from "react";
import axios from "axios";
import { getItems } from "../../redux/actions/shopAction";
import { connect } from "react-redux";

const AddItem = ({ getItems }) => {
  const INITIAL_STATE = {
    name: "",
    price: "",
    img: "",
  };

  const [itemData, setItemData] = useState(INITIAL_STATE);

  const { name, price, img } = itemData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItemData({
      ...itemData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/items", itemData);
    getItems();
    setItemData(INITIAL_STATE);
  };

  return (
    <div className="card bg-light p-4 my-4 col-md-6 offset-md-3">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Add Item</h3>
        <div className="form-group row my-2">
          <label htmlFor="name" className="col-md-3 col-form-label">
            Name:
          </label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row my-2">
          <label htmlFor="price" className="col-md-3 col-form-label">
            Price:
          </label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row my-2">
          <label htmlFor="imageUrl" className="col-md-3 col-form-label">
            Image URL:
          </label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              name="img"
              value={img}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row my-2">
          <div className="col-3"></div>
          <button
            type="submit"
            className="btn d-block btn-primary w-25 offset-3"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { getItems })(AddItem);
