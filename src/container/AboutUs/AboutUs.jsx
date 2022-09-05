import React from "react";
import "./AboutUs.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const AboutUs = ({subhead}) => {
  return (
    <div
      className="app__aboutus app__bg section__padding flex__center"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="about img" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            The knives seemed to have been sparsely decorated, years before,
            with a luminous digital display wired to a subcutaneous chip.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            And yet I wish you were me?' `Well, perhaps not,' said Alice in a
            sorrowful tone, `I'm afraid I've offended it again!' For the Mouse
            was swimming away from her as hard as he could go.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


