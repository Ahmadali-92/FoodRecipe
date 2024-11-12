import React from "react";
import "./Item.css";
import Wrapper from "../wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="ListItems">
      <Wrapper>
        <div
          className="Items"
          onClick={() => {
            navigate(`/${item.idMeal}`);
          }}
        >
          <div className="content">
            <p className="contentHeading">
              {item.strMeal.length > 20
                ? item.strMeal.slice(0, 20) + "..."
                : item.strMeal}
            </p>
          </div>
          <div className="contentImage">
            <img src={item.strMealThumb} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Item;
