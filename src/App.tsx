import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Showcase/ImageSlider";
import Card from "./components/Items/Card";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ImageSlider />
        <Card />
      </main>
    </>
  );
};

export default App;