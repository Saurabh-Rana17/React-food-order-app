import React from "react";
import Header from "./components/Header";
import MealSection from "./components/MealSection";
import { ModalContextProvider } from "./store/ModalContext";
import { OrderContextProvider } from "./store/OrderContext";

function App() {
  return (
    <>
      <OrderContextProvider>
        <ModalContextProvider>
          <Header />
        </ModalContextProvider>
        <MealSection />
      </OrderContextProvider>
    </>
  );
}

export default App;
