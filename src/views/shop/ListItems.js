import React, { useEffect, useState } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getItems } from "../../redux/actions/shopAction";

const ListItems = ({ items, getItems }) => {
  useEffect(() => {
    if (items === null) getItems();
  }, []);

  return (
    <div className="row">
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.shop.items,
});
export default connect(mapStateToProps, { getItems })(ListItems);
