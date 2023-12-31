import { createContext, useReducer } from "react";

export const ModalContext = createContext({
  modalState: false,
  handleModal: () => "",
  openCart: () => "",
});
function modalReducer(state, action) {
  switch (action.type) {
    case "showCheckout":
      return true;
    case "showCart":
      return false;

    default:
      break;
  }
}
export function ModalContextProvider({ children }) {
  // modalstate true for checkout false for cart
  const [modalState, modalStateDispatch] = useReducer(modalReducer, false);

  function handleModal() {
    modalStateDispatch({
      type: "showCheckout",
    });
  }

  function openCart() {
    modalStateDispatch({
      type: "showCart",
    });
  }

  const modalContextValue = {
    modalState,
    handleModal,
    openCart,
  };
  return (
    <>
      <ModalContext.Provider value={modalContextValue}>
        {children}
      </ModalContext.Provider>
    </>
  );
}
