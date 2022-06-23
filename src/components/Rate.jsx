import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rate = ({ rating, setRating }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= x) {
        starsArray.push(
          <StarIcon
            style={{ cursor: "pointer" }}
            key={i}
            onClick={() => {
              setRating(i);
            }}
          />
        );
      } else {
        starsArray.push(
          <StarBorderIcon
            style={{ cursor: "pointer" }}
            key={i}
            onClick={() => {
              setRating(i);
            }}
          />
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRating: () => {},
};

export default Rate;
