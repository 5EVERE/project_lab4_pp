import React, { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const [cheezzeClass, setCheezzeClass] = useState("");
  const [priceItem, setPriceItem] = useState(props.price);
  const cheezzeHandler = function (e) {
    if (e.target.className !== styles.activeCheezze) {
      setCheezzeClass(styles.activeCheezze);
      props.addCheezzeItem();
    } else {
      setCheezzeClass("");
      props.removeCheezzeItem();
    }
  };
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{props.price}</span>
          <span className={styles.amount}>x {props.amount}</span>
          <button onClick={cheezzeHandler} className={cheezzeClass}>
            Подвійний сир
          </button>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
