import React from "react";

import styles from "./Main.scss";
import Form from "../form/Form";
import Details from "../details/Details";

function Main() {
  return (
	<div className={styles["container"]}>
		<div className={styles['left']}>
			<Form />
		</div>
		<div className={styles['right']}>
			<Details />
		</div>
	</div>
	);
}

export default Main;
