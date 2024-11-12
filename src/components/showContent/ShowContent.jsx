import React, { useEffect, useState } from "react";
import "./ShowContent.css";
import Item from "../items/Item";
import Wrapper from "../wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShowContent = ({ selectCategoryData }) => {
  const navigate = useNavigate();
  const [mealData, setMealData] = useState("");

  const callfunction = async () => {
    const categoriesOf = await axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectCategoryData}`
      )
      .then((res) => setMealData(res.data.meals));
  };
  useEffect(() => {
    callfunction();
  }, [selectCategoryData]);

  return (
    <Wrapper>
      <div className="ShowBox">
        {mealData &&
          mealData.map((item) => (
            <div
              className="items"
              key={item.idMeal}
              onClick={() => {
                navigate(`/${item.idMeal}`);
              }}
            >
              <Item item={item} />
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default ShowContent;
