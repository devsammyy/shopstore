import { Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <>
      <Paper
        sx={{
          padding: "1rem",
          marginTop: "2rem",
        }}
        elevation={3}
      >
        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: "bold", my: 1 }}
        >
          Super Deals
        </Typography>
        <Grid container spacing={2} sx={{ placeContent: "start" }}>
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
      </Paper>
      <Divider />
      <Paper
        sx={{
          padding: "1rem",
          marginTop: "2rem",
        }}
        elevation={3}
      >
        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: "bold", my: 1 }}
        >
          Official Store Deals
        </Typography>
        <Grid container spacing={2} sx={{ placeContent: "start" }}>
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
      </Paper>
    </>
  );
};

export default Card;
