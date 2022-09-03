// import React from "react";
import { useEffect, useState } from "react";
import store from "../store";
import { bindActionCreators } from "../redux";
import * as actionCreators from "../store/actionCreators/counter2";
const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
const Counter2 = () => {
  const [state, setState] = useState(store.getState().counter2);
  console.log(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState().counter2);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={() => boundActionCreators.addAction2(20)}>
        increment
      </button>
    </div>
  );
};

export default Counter2;
