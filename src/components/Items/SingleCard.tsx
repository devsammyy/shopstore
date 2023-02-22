import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import { Button, CardContent, Typography } from "@mui/material";
import { img2 } from "../../assets";

export default function SingleCard() {
  return (
    <Card sx={{ width: 300, height: "350px" }} elevation={1}>
      <CardMedia component="img" height="194" image={img2} alt="Paella dish" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Shoes
        </Typography>
        <Typography variant="h6" color="black">
          N200, 000
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", gap: "0.8rem" }} disableSpacing>
        <Button variant="contained">Buy now</Button>
        <Button variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
