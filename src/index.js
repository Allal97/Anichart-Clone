import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Navigation from "./Navigation";
import './styles.css';

const Index = () => {
  return (
      <div>
          <Navigation/>
          <Cards/>
      </div>
  ); 

};

ReactDOM.render(<Index />, document.getElementById("index"));


