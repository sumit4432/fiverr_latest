import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

const CatCard = (items) => {
  return (
    <Link to="/gig?cat=design/123">
      <div className="catCard">
        <img src={items.img} alt="" />
        <span className="desc">{items.desc}</span>
        <span className="title">{items.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
