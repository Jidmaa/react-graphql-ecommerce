import React from "react";
import Context from "./Context";
import { graphql } from "@apollo/client/react/hoc";
import { PRODUCTS } from "../API/queries";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
class ProductsListing extends React.Component {
  render() {
    if (this.props.data.loading) return <Loader />;
    else {
      console.log(this.props);
      const products = this.props.data.category.products;
      return (
        <div className="product-listing">
          <h1>{this.props.selectedCategory}</h1>
          <div className="product-cards">
            {products.map((product, index) => (
              <ProductCard product={product} key={`product-${index}`} />
            ))}
          </div>
        </div>
      );
    }
  }
}
export default graphql(PRODUCTS, {
  options: (props) => {
    return {
      variables: { title: props.selectedCategory },
    };
  },
})(ProductsListing);
