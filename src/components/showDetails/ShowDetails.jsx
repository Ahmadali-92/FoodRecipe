import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { idMeals } = useParams();

  const fetchIdMeals = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`)
      .then((res) => console.log(res))
      .catch((err) => console.log("The error is:", err.message));
  };
  useEffect(() => {
    fetchIdMeals;
  }, [idMeals]);

  return <div>ShowDetails</div>;
};

export default ShowDetails;
