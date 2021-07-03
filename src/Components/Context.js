import React from "react";
const Context = React.createContext();
class Provider extends React.Component {
  state = {
    selectedCategory: "",
    selectedCurrency: "",
  };
  setSelectedCategory = (category) => {
    console.log("test of context", category);
    this.setState((prevState) => ({ selectedCategory: category }));
  };
  setSelectedCurrency = (currency) => {
    this.setState((prevState) => ({ selectedCurrency: currency }));
  };
  render() {
    const { children } = this.props;
    const { selectedCategory, selectedCurrency } = this.state;
    const { setSelectedCategory, setSelectedCurrency } = this;
    return (
      <Context.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
          selectedCurrency,
          setSelectedCurrency,
        }}
      >
        {" "}
        {children}{" "}
      </Context.Provider>
    );
  }
}
export default Context;
export { Provider };
