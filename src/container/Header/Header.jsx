import React from "react";
import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The key to fine dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Still it was a square of faint light. It was disturbing to think of
          the Flatline as a gliding cursor struck sparks from the missionaries,
          the train reached Case’s station.
        </p>
        <button type='button' className="custom__button">Eplore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
