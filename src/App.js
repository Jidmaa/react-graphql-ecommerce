import React from "react";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import ProductsListing from "./Components/ProductsListing";
import { graphql } from "@apollo/client/react/hoc";
import { CATEGORIES_CURRENCIES } from "./API/queries";
import Context, { Provider } from "./Components/Context";

class App extends React.Component {
  static contextType = Context;
  render() {
    if (!this.props.data.loading && !this.props.data.error) {
      return (
        <div className="main">
          <Header data={this.props.data} />
          <ProductsListing selectedCategory={this.context.selectedCategory} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default graphql(CATEGORIES_CURRENCIES)(App);
