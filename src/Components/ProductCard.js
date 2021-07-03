import React from "react";
import Context from "./Context";
import { getCurrencySymbol } from "../Functions/util";

class ProductCard extends React.Component {
  static contextType = Context;
  render() {
    const { product } = this.props;
    const { selectedCurrency } = this.context;
    return (
      <div>
        <img
          width={330}
          height={354}
          src={product.gallery[0]}
          alt={product.name}
          className="product-img"
        />
        <p> {product.name}</p>
        <span>
          {getCurrencySymbol(selectedCurrency)}{" "}
          {
            product.prices.find(({ currency }) => currency == selectedCurrency)
              .amount
          }
        </span>
      </div>
    );
  }
}
export default ProductCard;
