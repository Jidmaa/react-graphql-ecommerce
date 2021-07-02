import React from "react";
const Context = React.createContext();
class Provider extends React.Component {
  state = {
    selectedCategory: "",
  };
  setSelectedCategory = (category) => {
    console.log("test of context", category);
    this.setState((prevState) => ({ selectedCategory: category }));
  };
  render() {
    const { children } = this.props;
    const { selectedCategory } = this.state;
    const { setSelectedCategory } = this;
    return (
      <Context.Provider value={{ selectedCategory, setSelectedCategory }}>
        {" "}
        {children}{" "}
      </Context.Provider>
    );
  }
}
export default Context;
export { Provider };
