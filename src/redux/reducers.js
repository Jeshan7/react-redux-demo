import * as actionTypes from "./actions";

const initialState = {
  noOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1,
      };
    default:
      return state;
  }
};

export default reducer;
