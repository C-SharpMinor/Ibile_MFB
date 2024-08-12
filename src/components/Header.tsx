import React from "react";
import "./header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1, faLaptop } from "@fortawesome/free-solid-svg-icons";
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={scrolled ? "headerScrolled" : "header"}>
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zDsjnemDTvOpqUxr0y1RQ9ltBK7kpOYZbg&s" />
      </div>
      <nav className="right">
        <ul>
          <li>Home</li>
          <li>Who We Are</li>
          <li>Products </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faMoneyBill1} />
            Click To Apply For A Loan{" "}
          </li>
          <li>FAQs </li>
          <li>Services </li>
          <li>Career </li>
          <li>Media </li>
          <li>Contact Us </li>
          <li>
            <FontAwesomeIcon icon={faLaptop} />
            Online Banking{" "}
          </li>
          <li>Pay LASG Tax </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
