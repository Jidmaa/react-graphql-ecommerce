import React from "react";
import Header from "./Components/Header";
import ProductsListing from "./Components/ProductsListing";
import { CategoryProvider } from "./Components/Context";
import { graphql } from "@apollo/client/react/hoc";
import { CATEGORIES_CURRENCIES } from "./API/queries";
import loader from "./oval.svg";
class App extends React.Component {
  render() {
    if (!this.props.data.loading) {
      const user = {
        selectedCategory: this.props.data.category.products[0].category,
      };
      return (
        <div className="main">
          <CategoryProvider value={user}>
            <Header data={this.props.data} />
            <ProductsListing />
          </CategoryProvider>
        </div>
      );
    } else {
      // TODO : ADD A LOADER
      return <img className="loader" src={loader} alt="loading" />;
    }
  }
}

export default graphql(CATEGORIES_CURRENCIES)(App);
