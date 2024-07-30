import { useMemo, useReducer, createContext, ReactNode } from "react";

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type CartStateType = {
  cart: CartItemType[];
};

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTIONS = {
  REMOVE: "REMOVE",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SUBMIT: "SUBMIT",
} as const;

export type ReducerActionType = keyof typeof REDUCER_ACTIONS;
export type ReducerAction = {
  type: ReducerActionType;
  payload?: CartItemType;
};

function reducer(state: CartStateType, action: ReducerAction): CartStateType {
  switch (action.type) {
    case REDUCER_ACTIONS.REMOVE: {
      if (!action.payload) {
        throw new Error(
          `Payload is required for ${REDUCER_ACTIONS.REMOVE} action`,
        );
      }
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload?.id,
      );
      return { ...state, cart: filteredCart };
    }
    case REDUCER_ACTIONS.INCREMENT: {
      if (!action.payload) {
        throw new Error(
          `Payload is required for ${REDUCER_ACTIONS.INCREMENT} action`,
        );
      }
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload?.id,
      );
      const itemExists = state.cart.find(
        (item) => item.id === action.payload?.id,
      );
      const quantity = itemExists ? itemExists.quantity + 1 : 1;
      return {
        ...state,
        cart: [...filteredCart, { ...action.payload, quantity }],
      };
    }
    case REDUCER_ACTIONS.DECREMENT: {
      if (!action.payload) {
        throw new Error(
          `Payload is required for ${REDUCER_ACTIONS.DECREMENT} action`,
        );
      }
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload?.id,
      );
      const itemExists = state.cart.find(
        (item) => item.id === action.payload?.id,
      );
      const quantity = itemExists ? itemExists.quantity - 1 : 0;
      if (quantity > 0) {
        return {
          ...state,
          cart: [...filteredCart, { ...action.payload, quantity }],
        };
      }
      return { ...state, cart: filteredCart };
    }
    case REDUCER_ACTIONS.SUBMIT: {
      if (!action.payload) {
        throw new Error(
          `Payload is required for ${REDUCER_ACTIONS.SUBMIT} action`,
        );
      }
      return { ...state, cart: [] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useCartContext(initState: CartStateType) {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const ACTIONS = useMemo(() => REDUCER_ACTIONS, []);
  const cart = state.cart;

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));

  return { cart, ACTIONS, dispatch, totalPrice };
}

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  cart: [],
  ACTIONS: REDUCER_ACTIONS,
  dispatch: () => {},
  totalPrice: "",
};

const CartContext = createContext<UseCartContextType>(initCartContextState);

type ChildrenProps = { children: ReactNode };

export function CartContextProvider({ children }: ChildrenProps) {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
