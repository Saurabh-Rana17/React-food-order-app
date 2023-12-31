import { createContext, useReducer } from "react";

export const OrderContext = createContext({
  orderState: {},
  addToCart: () => " ",
  increaseQuantity: () => "",
  decreaseQuantity: () => "",
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

    case "increaseQuantity":
      const newArr = orderState.orderArray.map((item) => {
        if (item.id === action.payload.id) {
          const newItem = { ...item, quantity: item.quantity + 1 };
          return newItem;
        } else {
          return item;
        }
      });
      return { ...orderState, orderArray: newArr };
    case "decreaseQuantity":
      const newArray = orderState.orderArray.map((item) => {
        if (item.id === action.payload.id) {
          const newItem = { ...item, quantity: item.quantity - 1 };
          return newItem;
        } else {
          return item;
        }
      });
      return { ...orderState, orderArray: newArray };
    default:
      break;
  }
}

export function OrderContextProvider({ children }) {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    userDetail: {},
    orderArray: [],
  });

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

  function increaseQuantity(id) {
    orderDispatch({
      type: "increaseQuantity",
      payload: {
        id: id,
      },
    });
  }

  function decreaseQuantity(id) {
    orderDispatch({
      type: "decreaseQuantity",
      payload: {
        id: id,
      },
    });
  }

  const orderContextValue = {
    orderState,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
}
