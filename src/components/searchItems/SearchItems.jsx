import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../items/Item";
import Wrapper from "../wrapper/Wrapper";

const SearchItems = () => {
  const { query } = useParams();
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        setSearchData(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <Wrapper>
      <div className="ShowBox">
        {searchData ? (
          searchData.map((item) => (
            <div
              className="items"
              key={item.idMeal}
              onClick={() => {
                navigate(`/${item.idMeal}`);
              }}
            >
              <Item item={item} />
            </div>
          ))
        ) : (
          <div
            style={{
              fontSize: "10vmin",
              fontWeight: "500",
              opacity: "0.7",
              fontStyle: "italic",
              margin: "10vmin 0",
              marginBottom: "15vmin",
            }}
          >
            {" "}
            Item not found...
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default SearchItems;
