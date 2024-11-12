import React from "react";
import Wrapper from "../wrapper/Wrapper";

const NotFound = () => {
  return (
    <Wrapper>
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
        Page not found....
      </div>
    </Wrapper>
  );
};

export default NotFound;
