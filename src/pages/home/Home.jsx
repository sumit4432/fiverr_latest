import React from "react";
import "./Home.scss";
import Featured from "../../components/featued/Featured";
import TrustedBy from "../../components/turstedBy/TrustedBy";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
};

export default Home;
