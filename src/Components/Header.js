import React from "react";
import logo from "../logo.svg";
import cart from "../cart.svg";
import { graphql } from "@apollo/client/react/hoc";
import { CATEGORIES_CURRENCIES } from "../API/queries";
import { getCurrencySymbol } from "../Functions/util";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currencies: false };
  }
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <div className="nav-element">
          <span className="category active ">Women</span>
          <span className="category ">Men</span>
          <span className="category">Kids </span>
        </div>
        <div className="nev-element">
          <img src={logo} alt="ecommerce-logo" />
        </div>
        <div className="nav-element">
          <div className="actions">
            <div
              className="currency-selector"
              onClick={() => {
                console.log("hey");
                this.setState((prevState) => ({
                  currencies: !prevState.currencies,
                }));
                console.log(this.state.currencies);
              }}
            >
              <div className="currency-icon">
                <span> $ </span>{" "}
                <span
                  className={
                    "arrow " + (this.state.currencies == true ? "up" : "down")
                  }
                ></span>
              </div>
              {this.state.currencies == true && !this.props.data.loading && (
                <ul className="currencies-list">
                  {this.props.data.currencies.map((currency) => (
                    <li>
                      {" "}
                      {getCurrencySymbol("RU-ru", currency)} {currency}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <img src={cart} alt="cart-logo" className="cart-logo" />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(CATEGORIES_CURRENCIES)(Header);
