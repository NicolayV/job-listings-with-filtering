import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

export const filterReducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_FILTER: {
      if (state.includes(actions.filter)) {
        return state;
      }

      return [...state, actions.filter];
    }
    case REMOVE_FILTER: {
      return state.filter((item) => item !== actions.filter);
    }
    case CLEAR_FILTER: {
      return [];
    }

    default: {
      return state;
    }
  }
};
