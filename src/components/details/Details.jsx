import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const Details = () => {
  const { idMeal } = useParams();
  const [itemData, setItemData] = useState([]);
  const callfunction = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setItemData(response.data.meals);
    } catch (error) {
      console.error("Error fetching meal details :", error);
    }
  };
  console.log(itemData);
  useEffect(() => {
    callfunction();
  }, [idMeal]);
  return (
    <>
      {itemData?.length > 0 ? (
        <>
          {itemData?.map((item) => (
            <div className="itemDetails" key={item.idMeal}>
              <div className="mainContent">
                <img src={item.strMealThumb} alt="" className="itemImage" />
                <div className="itemData">
                  <h2 className="itemHeading">{item.strMeal}</h2>
                  <div className="itemSpan">
                    <span className="itemCategory">
                      <b>Category</b>: <span>{item.strCategory}</span>
                    </span>
                    <span className="itemArea">
                      <b>Area</b>: <span>{item.strArea}</span>
                    </span>
                    <span className="itemSource">
                      <b>Source</b>:{" "}
                      <span>
                        <a
                          href={item.strSource}
                          target="_blank"
                          className="itemLink"
                        >
                          Read me...
                        </a>
                      </span>
                    </span>
                  </div>
                  <p className="itemPara">
                    <b>Instruction</b>: {item.strInstructions}
                  </p>
                </div>
              </div>
              <div className="itemVideo">
                <ReactPlayer controls url={item.strYoutube} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Details;
