import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Showcase/ImageSlider";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ImageSlider />
      </main>
    </>
  );
};

export default App;
