import { ADD_POSITIONS } from "./position-actions";

export const positionsReducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_POSITIONS:
      return [...state, ...actions.positions];

    default: {
      return state;
    }
  }
};
