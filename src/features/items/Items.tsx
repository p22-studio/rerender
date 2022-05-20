import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  Item,
  replace,
  selectItemName,
  selectItemIds,
  selectItems,
} from "./itemsSlice";
import styles from "./Items.module.css";

const equal = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

const BasicItem = ({ item }: { item: Item }) => {
  console.log("🟦 Render BasicItem", item.id);
  return <pre className={styles.value}>{item.name}</pre>;
};

const BasicItems = () => {
  console.log("🟦 Render BasicItems list");
  const items = useAppSelector(selectItems);

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
  const item = useAppSelector((state) => selectItemName(state, id));
  return <pre className={styles.value}>{item}</pre>;
};
const SmartItems = () => {
  console.log("🟧 Render SmartItems list");
  const ids = useAppSelector(selectItemIds, equal);

  return (
    <div className={styles.row}>
      {ids.map((key) => (
        <SmartItem id={key} key={key} />
      ))}
    </div>
  );
};

function Actions() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        onClick={() => {
          const newItems = { ...items };
          newItems.a = { id: "a", name: Math.random().toPrecision(3) };
          return dispatch(replace(newItems));
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
