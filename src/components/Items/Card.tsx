import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <Container
      sx={{
        marginY: "2rem",
      }}
    >
      <Typography
        variant="h4"
        color="#282828"
        sx={{
          fontFamily: "Open sans",
          fontWeight: "700",
          my: 5,
          textAlign: "center",
        }}
      >
        Super Deals
      </Typography>
      <Grid container spacing={2} sx={{ placeContent: "center" }}>
        <Grid item md={3}>
          <SingleCard />
        </Grid>
        <Grid item md={3}>
          <SingleCard />
        </Grid>
        <Grid item md={3}>
          <SingleCard />
        </Grid>
        <Grid item md={3}>
          <SingleCard />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        color="#282828"
        sx={{
          fontFamily: "Open sans",
          fontWeight: "700",
          my: 5,
          textAlign: "center",
        }}
      >
        Store Super Deals
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
