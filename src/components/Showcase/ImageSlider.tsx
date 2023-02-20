import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Carousel from "react-material-ui-carousel";
import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets";

function QuiltedImageList() {
  return (
    <Carousel sx={{ width: "100%" }}>
      {itemData.map((item, index) => (
        <img
          key={index}
          style={{ width: "100%", height: "300px" }}
          src={item}
          loading="lazy"
        />
      ))}
    </Carousel>
  );
}

const itemData = [img1, img2, img3, img4, img5, img6, img7];

export default QuiltedImageList;
