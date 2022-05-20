import React, { useState } from "react";

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
  console.log("Render BasicItem", item.id);
  return <pre className={styles.value}>{item.name}</pre>;
};

const BasicItems = () => {
  console.log("Render BasicItems");
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
  console.log("Render SmartItem", id);
  const item = useAppSelector((state) => selectItemName(state, id), equal);
  return <pre className={styles.value}>{item}</pre>;
};
const SmartItems = () => {
  console.log("Render SmartItems");
  const ids = useAppSelector(selectItemIds, equal);

  return (
    <div className={styles.row}>
      {ids.map((key) => (
        <SmartItem id={key} key={key} />
      ))}
    </div>
  );
};

export function Items() {
  console.log("Render Items");
  const dispatch = useAppDispatch();

  const [json, setJson] = useState(`{
  "a":{"id":"a", "name":"a"},
  "b":{"id":"b", "name":"b"}
}`);

  return (
    <div>
      <BasicItems />
      <SmartItems />
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(replace(JSON.parse(json)))}
        >
          Replace Items
        </button>
      </div>
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        style={{ width: "100vw", height: "12em" }}
      />
    </div>
  );
}
