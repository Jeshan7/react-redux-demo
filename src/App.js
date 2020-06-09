import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import IceContainer from "./IceConatiner";
import CakeContainer from "./HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceContainer />
      </div>
    </Provider>
  );
}

export default App;
