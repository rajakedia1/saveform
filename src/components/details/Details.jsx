import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { database } from "../../api/firebaseUtil";
import { getData } from "../../api/networkutil";
import Item from "./item";
import styles from "./Details.scss";
import Loader from "../loader/Loader";

function Details() {

  const [items, setItems] = useState({});
  const [err, setErr] = useState(false);
  function getData() {
    database.on("value", snap => {
      const item = snap.val();
      if (item) {
        setErr(false);
        setItems(snap.val());
      } else {
        setErr(true);
      }
    }, (err) => {
        console.log("ER: ", err);
    });
  }

  useEffect(getData, []);
  console.log("D:", items);
  return (
    <div className={styles["container"]}>
        {
            err ? <div className={styles['error']}>Data Not exist</div>
            : ""

        }
      {Object.keys(items).length || err ? (
        ""
      ) : (
        <div className={styles["loader"]}>
          <Loader />
        </div>
      )}
      {Object.keys(items)
        .reverse()
        .map(item => {
          return <Item item={items[item]} key={item} />;
        })}
    </div>
  );
}

export default Details;
