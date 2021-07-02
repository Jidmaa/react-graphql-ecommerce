import React from "react";
import Context from "./Context";
import { graphql } from "@apollo/client/react/hoc";
import { PRODUCTS } from "../API/queries";
class ProductsListing extends React.Component {
  render() {
    return (
      <div className="product-listing">
        <h1>{this.props.selectedCategory}</h1>
      </div>
    );
  }
}
export default graphql(PRODUCTS, {
  options: (props) => {
    return {
      variables: { title: props.selectedCategory },
    };
  },
})(ProductsListing);
