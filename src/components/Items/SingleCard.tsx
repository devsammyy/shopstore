import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import {
  Box,
  Button,
  ButtonBase,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { img2 } from "../../assets";

export default function SingleCard() {
  return (
    <ButtonBase sx={{ textAlign: "unset" }}>
      <Card sx={{ width: "200px", xs: { width: "50px" } }} elevation={1}>
        <CardMedia component="img" image={img2} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" sx={{ fontWeight: 100 }}>
            Sleek Shoe for both men and women
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant="body1" color="black">
              N200, 000
            </Typography>
            <Typography variant="body2" color="#3d3d3d">
              Sales 432
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
