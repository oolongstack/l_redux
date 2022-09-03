export function combineReducers(reducers) {
  return function (state = {}, action) {
    const nextState = {};
    for (const key in reducers) {
      const subReducer = reducers[key];
      const lastStateForKey = state[key];
      const nextStateForKey = subReducer(lastStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}
