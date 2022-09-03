import { ADD2, INCREMENT2, SUB2 } from "../action-types";
function addAction2(value) {
  return {
    type: ADD2,
    value,
  };
}

function subAction2(value) {
  return {
    type: SUB2,
    value,
  };
}
function incrementAction2() {
  return {
    type: INCREMENT2,
  };
}

export { addAction2, subAction2, incrementAction2 };
