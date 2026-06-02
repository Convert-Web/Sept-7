"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react";

/* ── Types ── */
export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  desc?: string;
}

type Action =
  | { type: "ADD"; item: Omit<CartItem, "qty"> }
  | { type: "INC"; id: number }
  | { type: "DEC"; id: number }
  | { type: "DEL"; id: number }
  | { type: "CLEAR" };

interface CartContextValue {
  items: CartItem[];
  dispatch: React.Dispatch<Action>;
  total: number;
  count: number;
}

/* ── Reducer ── */
function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD": {
      const i = state.findIndex((x) => x.id === action.item.id);
      return i >= 0
        ? state.map((x, n) => (n === i ? { ...x, qty: x.qty + 1 } : x))
        : [...state, { ...action.item, qty: 1 }];
    }
    case "INC":
      return state.map((x) => (x.id === action.id ? { ...x, qty: x.qty + 1 } : x));
    case "DEC":
      return state
        .map((x) => (x.id === action.id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0);
    case "DEL":
      return state.filter((x) => x.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

/* ── Context ── */
const CartCtx = createContext<CartContextValue | null>(null);

/* ── Provider ── */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartCtx.Provider value={{ items, dispatch, total, count }}>
      {children}
    </CartCtx.Provider>
  );
}

/* ── Hook ── */
export function useCart(): CartContextValue {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
