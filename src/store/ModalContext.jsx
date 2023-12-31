import { createContext, useReducer } from "react";

export const ModalContext = createContext({
  modalState: false,
  handleModal: () => "",
  openCart: () => "",
  handleSuccess: () => "",
});
function modalReducer(state, action) {
  switch (action.type) {
    case "showCheckout":
      return "checkout";
    case "showCart":
      return "cart";
    case "success":
      return "success";

    default:
      break;
  }
}
export function ModalContextProvider({ children }) {
  const [modalState, modalStateDispatch] = useReducer(modalReducer, "cart");

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

  function handleSuccess() {
    modalStateDispatch({
      type: "success",
    });
  }

  const modalContextValue = {
    modalState,
    handleModal,
    openCart,
    handleSuccess,
  };
  return (
    <>
      <ModalContext.Provider value={modalContextValue}>
        {children}
      </ModalContext.Provider>
    </>
  );
}
