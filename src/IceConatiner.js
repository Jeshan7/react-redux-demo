import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";

const IceContainer = () => {
  const icecream = useSelector((state) => state.ice.icecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Icecream - {icecream}</h1>
      <button onClick={() => dispatch({ type: actions.BUY })}>buy</button>
    </div>
  );
};

export default IceContainer;
