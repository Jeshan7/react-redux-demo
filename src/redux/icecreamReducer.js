import * as actions from './actions';

const initialState = {
    icecreams: 10
}

const iceCreamReducer = (state = initialState,  action) => {
   switch(action.type) {
       case actions.BUY: return {
         ...state,
         icecreams: state.icecreams + 2
       }
        default: return state;
   }
}

export default iceCreamReducer;