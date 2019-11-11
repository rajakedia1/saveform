import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import NetworkResponseReducer from "./networkresponsereducer";
import ToolTipReducer from "./tooltipreducer";

function ConfigureStore() {
  const store = createStore(
    combineReducers(
      {
        mainresponse: NetworkResponseReducer,
        tooltip: ToolTipReducer
      },
      applyMiddleware(thunk)
    )
  );
  return store;
}

export default ConfigureStore;
