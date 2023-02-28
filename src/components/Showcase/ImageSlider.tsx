import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { img1, img2, img3 } from "../../assets";

function QuiltedImageList() {
  return (
    <Carousel sx={{ width: "100%", marginTop: "5rem" }}>
      {itemData.map((item, index) => (
        <img
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
          key={index}
          src={item}
        />
      ))}
    </Carousel>
  );
}

const itemData = [img1, img2, img3];

export default QuiltedImageList;
