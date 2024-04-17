import React from "react";
import "./Card.scss";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
//import { Link } from "react-router-dom";
import styled from "styled-components";

// make an overlay for cart button

const Card = ({ item }) => {
  return (
    <div className="menu">
      <div className="image">
        <img src={item.img} alt="" className="mainImg" />
      </div>
      <h3>{item.title}</h3>
    </div>
  );
};

export default Card;
