import React from "react";
import "./featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right <i>freelance</i> service, right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" placeholder="try " />
              <input type="text" placeholder="Search" />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web design</button>
            <button>Wordpress</button>
            <button>Logo design</button>
            <button>Ai services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/profile.jpg" alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
