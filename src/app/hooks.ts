import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ItemsState } from "../features/items/itemsSlice";

export const useAppSelector: TypedUseSelectorHook<ItemsState> = useSelector;
