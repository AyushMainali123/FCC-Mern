import React, { createContext, useContext, useReducer } from "react";

export const ExerciseList = createContext();

export const ExerciseProvider = ({ initialState, reducer, children }) => {
  return (
    <ExerciseList.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ExerciseList.Provider>
  );
};

export const useExerciseValue = () => useContext(ExerciseList);
