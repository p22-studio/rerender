export type Item = { id: string; name: string };
export type ItemsState = Record<string, Item>;

const equal = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

export const selectItems = (state: ItemsState) => {
  // console.log("selectItems");
  return state;
};
let oldKeys: string[] | null = null;
export const selectItemIds = (state: ItemsState) => {
  // console.log("selectItemIds");
  const newKeys = Object.keys(state);
  if (oldKeys && equal(oldKeys, newKeys)) {
    return oldKeys;
  }
  oldKeys = newKeys;
  return newKeys;
};
export const selectItemName = (state: ItemsState, id: string) => {
  // console.log("selectItemName");
  return state[id].name;
};
