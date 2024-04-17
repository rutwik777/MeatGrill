import React from "react";
import "./CatageoryCard.scss";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
//import { Link } from "react-router-dom";

const CatageoryCard = ({ item }) => {
  return (
    // <Link className="link" to={`/product/${item.id}`}>
    <div className="categorycard">
      <div className="image" >
        {/* {item?.attributes.isNew && <span>New Season</span>} */}
        {/* <span>{item.title}</span> */}
        <img
          src={
            //process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            item.img
          }
          alt=""
          className="mainImg"
        />
      </div>
    </div>
    //</Link>
  );
};

export default CatageoryCard;
