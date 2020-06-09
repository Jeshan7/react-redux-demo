import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "./redux/actions";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cakes - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Add Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch({ type: actionTypes.BUY_CAKE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
