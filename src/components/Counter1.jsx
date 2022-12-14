// import React from "react";
import { useEffect, useState } from "react";
import store from "../store";
import { bindActionCreators } from "../redux";
import * as actionCreators from "../store/actionCreators/counter1";
const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
const Counter1 = () => {
  const [state, setState] = useState(store.getState().counter1);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState().counter1);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={() => boundActionCreators.addAction1(20)}>
        increment
      </button>
    </div>
  );
};

export default Counter1;
