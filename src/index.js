import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {StateProvider} from './reducer/StateProvider'
import reducer, {initialState} from "./reducer/reducer";
import { ExerciseProvider } from './reducer/ExerciseListProvider'
import exerciseReducer, {initialState as exerciseInitialState} from './reducer/exerciseReducer'
ReactDOM.render(
  <React.StrictMode>
    <ExerciseProvider initialState = {exerciseInitialState} reducer = {exerciseReducer}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </ExerciseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
