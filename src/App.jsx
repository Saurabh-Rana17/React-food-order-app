import React from "react";
import Header from "./components/Header";
import MealSection from "./components/MealSection";
import { ModalContextProvider } from "./store/ModalContext";

function App() {
  return (
    <>
      <ModalContextProvider>
        <Header />
      </ModalContextProvider>
      <MealSection />
    </>
  );
}

export default App;
