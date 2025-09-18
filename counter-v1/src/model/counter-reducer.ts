import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMaxValueAC = createAction<{ maxCounterValue: number }>(
  "app/setMaxCounterValue"
);
export const setMinValueAC = createAction<{ minCounterValue: number }>(
  "app/setMinCounterValue"
);

export const setCounterDisplay = createAction<{ cunterDisplay: number }>(
  "app/setConter"
);

export const resetCounterAC = createAction<{ minCounterValue: number }>("app/reset");

export const setShowCounterAC = createAction<{ showCounter: boolean }>("app/setShowCounter");
const initialState = {
  cunterDisplay: JSON.parse(localStorage.getItem("cunterDisplay") || "0"),
  showCounter: true,
  maxCounterValue: 5,
  minCounterValue: 0,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCounterDisplay, (state, action) => {
      state.cunterDisplay = action.payload.cunterDisplay;
    })
    .addCase(resetCounterAC, (state, action) => {
      state.cunterDisplay = action.payload.minCounterValue;
    })
    .addCase(setMaxValueAC, (state, action) => {
      state.maxCounterValue = action.payload.maxCounterValue;
    })
    .addCase(setMinValueAC, (state, action) => {
      state.minCounterValue = action.payload.minCounterValue;
    })
    .addCase(setShowCounterAC, (state, action) => {
      state.showCounter = action.payload.showCounter 
    });
});
