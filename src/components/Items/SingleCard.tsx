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
import { useDispatch } from "react-redux";
import { increment } from "../../slices/counterSlice";

export default function SingleCard() {
  const dispatch = useDispatch();
  return (
    <ButtonBase
      sx={{ textAlign: "unset" }}
      onClick={() => dispatch(increment())}
    >
      <Card
        sx={{
          width: { sm: "200px" },
          backdropFilter: "blur(5px)",
          background: "rgba(255, 242, 242, 0.8)",
        }}
        elevation={2}
      >
        <CardMedia component="img" image={img2} alt="Paella dish" />
        <CardContent>
          <Typography
            color="#666565"
            variant="body2"
            sx={{ fontWeight: 600, marginBottom: "1rem" }}
          >
            Sleek Shoe for both men and women
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" color="#666565">
              &#8358;200, 000
            </Typography>
            <Typography variant="body2" color="#666565">
              Sales 432
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
