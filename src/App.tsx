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
      <Container maxWidth="xl">
        <Header />
        <main>
          <ImageSlider />
          <Card />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
