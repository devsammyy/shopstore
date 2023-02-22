import { Container } from "@mui/material";
import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets";

function QuiltedImageList() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <Carousel sx={{ width: "100%" }}>
        {itemData.map((item, index) => (
          <img
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            key={index}
            src={item}
          />
        ))}
      </Carousel>
    </Container>
  );
}

const itemData = [img1, img2, img3, img4, img5, img6, img7];

export default QuiltedImageList;
