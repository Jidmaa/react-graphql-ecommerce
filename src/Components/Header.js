import React from "react";
import logo from "../logo.svg";
import cart from "../cart.svg";
import { graphql } from "@apollo/client/react/hoc";
import { CATEGORIES_CURRENCIES } from "../API/queries";
import { getCurrencySymbol } from "../Functions/util";
import CategoryContext from "./Context";
class Header extends React.Component {
  static contextType = CategoryContext;
  constructor(props) {
    super(props);
    this.state = {
      currencies: false,
      currency: "$",
      categories: ["ALL"],
      selectedCategory: this.props.data.category.products[0].category,
      loadingState: true,
    };
  }
  componentDidMount() {
    const test = this.context;
    console.log(test);
  }
  handleCurrencyChange = (currency) => () =>
    this.setState({
      currency: getCurrencySymbol(currency),
    });
  handleCurrencyDropdown = () =>
    this.setState((prevState) => ({
      currencies: !prevState.currencies,
    }));

  render() {
    if (this.props.data.loading == true) {
      return <div />;
    } else {
      console.log(this.props);
      const categories = [
        ...new Set(
          this.props.data.category.products.map(({ category }) => category)
        ),
      ];
      return (
        <div className="header">
          <div className="nav-element">
            {categories.map((category, index) => (
              <span
                key={`category-${index}`}
                className={
                  "category " +
                  (category == this.state.selectedCategory ? "active" : "")
                }
              >
                {category}
              </span>
            ))}
          </div>
          <div className="nev-element">
            <img src={logo} alt="ecommerce-logo" />
          </div>
          <div className="nav-element">
            <div className="actions">
              <div
                className="currency-selector"
                onClick={this.handleCurrencyDropdown}
              >
                <div className="currency-icon">
                  <span> {this.state.currency}</span>
                  <span
                    className={
                      "arrow " + (this.state.currencies == true ? "up" : "down")
                    }
                  ></span>
                </div>
                {this.state.currencies == true && !this.props.data.loading && (
                  <ul className="currencies-list">
                    {this.props.data.currencies.map((currency) => (
                      <li
                        className="currency-item"
                        onClick={this.handleCurrencyChange(currency)}
                        key={`currency-${currency}`}
                      >
                        {getCurrencySymbol(currency)} {currency}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <img src={cart} alt="cart-logo" className="cart-logo" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
