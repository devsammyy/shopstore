import { Divider, Grid, Paper, Typography, Container } from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: "bold", my: 5 }}
        >
          Super Deals
        </Typography>
        <Grid container spacing={2}>
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
          <Grid item>
            <SingleCard />
          </Grid>
          <Grid item>
            <SingleCard />
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: "bold", my: 5 }}
        >
          Official Store Deals
        </Typography>
        <Grid container spacing={2}>
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
          <Grid item>
            <SingleCard />
          </Grid>
          <Grid item>
            <SingleCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Card;
