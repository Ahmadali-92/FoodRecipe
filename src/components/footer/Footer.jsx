import React from "react";
import "./Footer.css";
import Image from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <img className="footerImage f-img" src={Image} alt="" />
        <p>
          This is a recipe website with a wide variety of delicious recipes,
          easy-to-use search function. Join our community and let's cook
          together!
        </p>
      </div>
      <div className="mid">
        <div className="leftMid">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Team</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="rightMid">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Use Cases</li>
            <li>Testimonials</li>
            <li>Insights</li>
          </ul>
        </div>
      </div>
      <div className="rightFooter">
        <img className="footerImage" src={Image} alt="" />
        <p>Ut risus mattis interdum faucidus facilisi purus accumsan aliquam</p>
      </div>
    </div>
  );
};

export default Footer;
