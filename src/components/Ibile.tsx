import React from "react";
import "./ibile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faHouseChimney,
  faPeopleGroup,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

const Ibile: React.FC = () => {
  return (
    <div className="ibile">
      <div>
        <span className="line1">Our Working Theory</span>
      </div>
      <div>
        <span className="line2">
          It is not Microfinance banking if it does not directly impact your
          personal and business aspirations, end of story.
        </span>
      </div>

      <div className="underline"></div>

      <div className="text">
        <div className="paragraph">
          <span>
            People all over the world have similar aspirations — to provide for
            their families, to feed, clothe and shelter them, and to provide
            their children with opportunities to succeed. In developing
            countries where poverty is highest, microenterprises are estimated
            to represent more than 80% of all wealth-building enterprises and
            more than 20% of GDP.
          </span>
        </div>

        <div className="paragraph">
          <span>
            At IBILE Microfinance Bank, we know that one of the most effective
            means of ensuring that the poor take part in their economy is to
            provide them with access to the financial products and services they
            need to help them build wealth and achieve their goals.{" "}
          </span>
        </div>
        <div className="paragraph">
          <span style={{ color: "#f7803c" }}>…empowering your future.</span>
        </div>
      </div>

      <div className="underline2"></div>

      <div className="customer">
        <h1 style={{ color: "black" }}>Our Ingenious Customer Solutions</h1>
        <div style={{ marginTop: "10px" }}>
          <span className="text" style={{ fontSize: "20px" }}>
            We provide broad-based, innovative and accessible financial
            solutions that improve your life and help you achieve your business
            goals.
          </span>
        </div>
        <div className="links">
          <div className="container">
            <FontAwesomeIcon icon={faDatabase} className="icon" />
            <h2> Broad Based Financing Solutions</h2>
            <div className="underline3"></div>
            <span>
              {" "}
              IBILE MFB provides an exciting bouquet of financing solutions
              suited to meet your needs.{" "}
            </span>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faHouseChimney} className="icon" />
            <h2> Affordable Home Convenience & Appliance Financing</h2>
            <div className="underline3"></div>
            <span> IBILE BuyNowPayLater – Asset Financing… </span>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faPeopleGroup} className="icon" />{" "}
            <h2>Structured Cooperative and Group Lending Facilities</h2>
            <div className="underline3"></div>
            <span>
              {" "}
              Provides loans to members of approved cooperative societies,
              associations & unions.{" "}
            </span>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faLaptop} className="icon" />{" "}
            <h2> Easy Access Online Banking</h2>
            <div className="underline3"></div>
            <span>
              {" "}
              Ranging from online banking to mobile apps, we provide innovative
              easy banking solutions for your convenience.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ibile;
