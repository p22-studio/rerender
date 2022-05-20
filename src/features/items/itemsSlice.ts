import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Item = { id: string; name: string };
export type ItemsState = Record<string, Item>;

const initialState: ItemsState = {
  a: { id: "a", name: "a" },
  b: { id: "b", name: "b" },
  c: { id: "c", name: "c" },
  d: { id: "d", name: "d" },
  e: { id: "e", name: "e" },
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    replace: (state, action: PayloadAction<ItemsState>) => action.payload,
  },
});

export const { replace } = itemsSlice.actions;

export const selectItems = (state: RootState) => {
  // console.log("selectItems");
  return state.items;
};
export const selectItemIds = (state: RootState) => {
  // console.log("selectItemIds");
  return Object.keys(state.items);
};
export const selectItemName = (state: RootState, id: string) => {
  // console.log("selectItemName");
  return state.items[id].name;
};

export default itemsSlice.reducer;
