import React, { useEffect, useState } from "react";
import "./FoodSelect.css";
import axios from "axios";
import ShowContent from "../showContent/ShowContent";

const FoodSelect = () => {
  const [categor, setCategor] = useState([]);
  const [selectCategory, setSelectCategory] = useState("Beef");

  const hadleCategoryFind = (i) => {
    if (categor[i]) {
      setSelectCategory(categor[i]?.strCategory);
    }
  };

  const callfunction = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategor(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    callfunction();
  }, []);
  console.log("clicked value", categor);
  return (
    <>
      <div className="listItems">
        <ul>
          {categor.map((c, i) => (
            <li onClick={() => hadleCategoryFind(i)} key={c.idCategory}>
              {c.strCategory}
            </li>
          ))}
        </ul>
      </div>
      <ShowContent
        categor={categor}
        selectCategoryData={selectCategory}
      />
    </>
  );
};

export default FoodSelect;
