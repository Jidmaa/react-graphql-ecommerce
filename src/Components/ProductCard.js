import React from "react";
import Context from "./Context";
import { getCurrencySymbol } from "../Functions/util";
import cart from "../addtocart.svg";
class ProductCard extends React.Component {
  static contextType = Context;
  render() {
    const { product } = this.props;
    const { selectedCurrency } = this.context;
    return (
      <div className={"product-card " + (!product.inStock && "out-of-stock")}>
        <img
          width={330}
          height={354}
          src={product.gallery[0]}
          alt={product.name}
          className="product-img"
        />
        {!product.inStock && (
          <div className="out-of-stock-text"> OUT OF STOCK </div>
        )}
        <img src={cart} alt="add_to_cart" className="add-to-cart" />
        <p> {product.name}</p>
        <span className="price ">
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
