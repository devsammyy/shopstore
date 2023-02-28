import { Typography, Box } from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

const CardContainer = () => {
  return (
    <>
      <Typography
        variant="h4"
        color="#282828"
        sx={{
          fontFamily: "Open sans",
          fontWeight: "700",
          my: 4,
        }}
      >
        Shop our most trusted products
      </Typography>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <SingleCard />
      </Box>
    </>
  );
};

export default CardContainer;
