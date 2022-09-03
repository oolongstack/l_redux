export function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
  }
  return boundActionCreators;
}

function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    dispatch(actionCreator.apply(this, args));
  };
}
