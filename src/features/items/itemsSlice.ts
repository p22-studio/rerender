import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Item = { id: string; name: string };
export type ItemsState = Record<string, Item>;

const initialState: ItemsState = {};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    replace: (state, action: PayloadAction<ItemsState>) => action.payload,
  },
});

export const { replace } = itemsSlice.actions;

export const selectItems = (state: RootState) => {
  console.log("selectItems");
  return state.items;
};
export const selectItemIds = (state: RootState) => {
  console.log("selectItemIds");
  return Object.keys(state.items);
};
export const selectItemName = (state: RootState, id: string) => {
  console.log("selectItemName");
  return state.items[id].name;
};

export default itemsSlice.reducer;
