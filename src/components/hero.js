import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="col-8 mx-auto">
            <div className="py-3 py-md-4 text-center">
              <h1 className="text-white">Green Mountain Wildlife Services</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
