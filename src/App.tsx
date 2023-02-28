import React from "react";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Showcase/ImageSlider";
import CardContainer from "./components/Items/Card";
import Footer from "./components/Footer/Footer";
import { Container, CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container component={"div"}>
        <Header />
        <ImageSlider />
        <CardContainer />
      </Container>
      <Footer />
    </>
  );
};

export default App;
