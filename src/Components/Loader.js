import React from "react";
import loader from "../oval.svg";

class Loader extends React.Component {
  render() {
    return (
      <div className="load-wrapper">
        {" "}
        <img className="loader" src={loader} alt="loading" />{" "}
      </div>
    );
  }
}
export default Loader;
