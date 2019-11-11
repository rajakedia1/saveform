import React, {useState, useEffect} from "react";
import {Provider} from 'react-redux';
// import firebase from 'firebase';
import {database} from '../api/firebaseUtil';

import Nav from "./nav/Nav";

import styles from "./App.scss";
import Main from "./main/Main";
import ConfigureStore from "../reducer";
import ToolTip from "./tooltip/Tooltip";
// import { firebaseConfig } from "../api/config";

const store = ConfigureStore();

// const appconfig = firebase.initializeApp(firebaseConfig);
// const database = appconfig.database().ref().child('items');
  
function App() {

  return (
    <Provider store={store}>
      <div className={styles["container"]}>
        <Nav />
        <Main/>
        <ToolTip />
      </div>
    </Provider>
  );
}

export default App;
