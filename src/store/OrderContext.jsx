import { createContext, useReducer } from "react";

export const OrderContext = createContext({
  orderState: {},
  addToCart: () => " ",
});

function orderReducer(orderState, action) {
  switch (action.type) {
    case "addToCart":
      const prevArray = [...orderState.orderArray];
      const alreadyExist = prevArray.filter(
        (item) => item.id === action.payload.id
      );
      if (alreadyExist.length === 1) {
        return orderState;
      }
      const orderObj = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      };
      const array = [...orderState.orderArray, orderObj];
      return { ...orderState, orderArray: array };

    default:
      break;
  }
}

export function OrderContextProvider({ children }) {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    userDetail: {},
    orderArray: [],
  });
  console.log(orderState.orderArray);

  function addToCart(id, name, price) {
    orderDispatch({
      type: "addToCart",
      payload: {
        id,
        name,
        price,
      },
    });
  }

  const orderContextValue = {
    orderState,
    addToCart,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
}
