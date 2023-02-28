import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  ButtonBase,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";

interface CartData {
  id: number;
  category: string;
  cartImg: string;
  description: string;
  price: string;
  details: string;
}

export default function SingleCard() {
  const cartItems = useSelector((state: any) => state.cart.data);

  return (
    <Box
      sx={{
        marginBottom: "2rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {cartItems.map((cartItem: CartData) => (
        <Card elevation={3} sx={{ width: "200px", height: "100%" }}>
          <CardMedia
            component="img"
            image={cartItem.cartImg}
            alt="Paella dish"
            sx={{
              height: 100,
              width: "100%",
            }}
          />
          <CardContent>
            <Typography
              color="#666565"
              variant="h6"
              sx={{
                fontWeight: 600,
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {cartItem.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 400,
              }}
            >
              <Typography variant="body2" color="#666565">
                &#8358;{cartItem.price}
              </Typography>
              <Typography variant="body2" color="#666565">
                Sales {cartItem.details}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
