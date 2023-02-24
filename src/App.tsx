import React from "react";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Showcase/ImageSlider";
import Card from "./components/Items/Card";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <ImageSlider />
      <Card />
      <Footer />
    </>
  );
};

export default App;
