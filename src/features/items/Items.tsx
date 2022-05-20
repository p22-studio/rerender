import React, { useContext } from "react";

import { Item, selectItemName, selectItemIds, selectItems } from "./itemsSlice";
import styles from "./Items.module.css";
import { ItemsContext } from "../../app/store";

const BasicItem = ({ item }: { item: Item }) => {
  console.log("🟦 Render BasicItem", item.id);
  return <pre className={styles.value}>{item.name}</pre>;
};

const BasicItems = () => {
  console.log("🟦 Render BasicItems list");
  const { items: itemsState } = useContext(ItemsContext);
  const items = selectItems(itemsState);

  return (
    <div className={styles.row}>
      {Object.keys(items).map((key) => (
        <BasicItem item={items[key]} key={key} />
      ))}
    </div>
  );
};

const SmartItem = ({ id }: { id: string }) => {
  console.log("🟧 Render SmartItem", id);
  const { items: itemsState } = useContext(ItemsContext);
  const item = selectItemName(itemsState, id);
  return <pre className={styles.value}>{item}</pre>;
};
const SmartItems = () => {
  console.log("🟧 Render SmartItems list");
  const { items: itemsState } = useContext(ItemsContext);
  const ids = selectItemIds(itemsState);

  return (
    <div className={styles.row}>
      {ids.map((key) => (
        <SmartItem id={key} key={key} />
      ))}
    </div>
  );
};

function Actions() {
  const { items: itemsState, setItems } = useContext(ItemsContext);
  const items = selectItems(itemsState);

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        onClick={() => {
          const newItems = { ...items };
          newItems.a = { id: "a", name: Math.random().toPrecision(3) };
          return setItems(newItems);
        }}
      >
        Change A
      </button>
    </div>
  );
}

export function Items() {
  return (
    <div>
      <BasicItems />
      <SmartItems />
      <Actions />
    </div>
  );
}
