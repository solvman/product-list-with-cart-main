import { useReducer, createContext, ReactNode, useCallback } from "react";

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

      let updatedCart: CartItemType[];

      const itemExists = state.cart.find(
        (item) => item.id === action.payload?.id,
      );

      if (itemExists) {
        updatedCart = state.cart.map((item) => {
          if (item.id === action.payload?.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cart: [...updatedCart],
      };
    }
    case REDUCER_ACTIONS.DECREMENT: {
      if (!action.payload) {
        throw new Error(
          `Payload is required for ${REDUCER_ACTIONS.DECREMENT} action`,
        );
      }

      let updatedCart: CartItemType[];

      const itemExists = state.cart.find(
        (item) => item.id === action.payload?.id,
      );

      if (itemExists && itemExists.quantity > 1) {
        updatedCart = state.cart.map((item) => {
          if (item.id === action.payload?.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      } else if (itemExists && itemExists.quantity <= 1) {
        updatedCart = state.cart.filter(
          (item) => item.id !== action.payload?.id,
        );
      } else {
        updatedCart = [...state.cart];
      }

      return {
        ...state,
        cart: [...updatedCart],
      };
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
  const cart = state.cart;

  const increment = useCallback((item: CartItemType) => {
    dispatch({ type: REDUCER_ACTIONS.INCREMENT, payload: item });
  }, []);

  const decrement = useCallback((item: CartItemType) => {
    dispatch({ type: REDUCER_ACTIONS.DECREMENT, payload: item });
  }, []);

  const remove = useCallback((item: CartItemType) => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  }, []);

  const submit = useCallback((item: CartItemType) => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT, payload: {} as CartItemType });
  }, []);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return { cart, increment, decrement, remove, submit, totalPrice, totalItems };
}

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  cart: [],
  increment: () => {},
  decrement: () => {},
  remove: () => {},
  submit: () => {},
  totalPrice: "",
  totalItems: 0,
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
