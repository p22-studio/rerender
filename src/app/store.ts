import { createContext } from "react";
import { ItemsState } from "../features/items/itemsSlice";

export const ItemsContext = createContext<{
  items: ItemsState;
  setItems: (i: ItemsState) => void;
}>({
  items: {
    a: { id: "a", name: "a" },
    b: { id: "b", name: "b" },
    c: { id: "c", name: "c" },
    d: { id: "d", name: "d" },
    e: { id: "e", name: "e" },
  },
  setItems: () => {},
});
