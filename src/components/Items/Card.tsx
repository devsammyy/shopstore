import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <Container sx={{ marginY: "5rem" }}>
      <Typography
        variant="h4"
        color="#fff"
        sx={{
          fontFamily: "Open sans",
          fontWeight: "700",
          my: 5,
          backgroundColor: "#163bdf",
          textAlign: "center",
        }}
      >
        Super Deals
      </Typography>
      <Grid container spacing={1} sx={{ placeContent: "center" }}>
        <Grid item>
          <SingleCard />
        </Grid>
        <Grid item>
          <SingleCard />
        </Grid>
        <Grid item>
          <SingleCard />
        </Grid>
        <Grid item>
          <SingleCard />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        color="#fff"
        sx={{
          fontFamily: "Open sans",
          fontWeight: "700",
          my: 5,
          backgroundColor: "#163bdf",
          textAlign: "center",
        }}
      >
        Super Deals
      </Typography>
      <Grid container spacing={2} sx={{ placeContent: "center" }}>
        <Grid item>
          <SingleCard />
        </Grid>
        <Grid item>
          <SingleCard />
        </Grid>
        <Grid item>
          <SingleCard />
        </Grid>
        <Grid item>
          <SingleCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Card;
