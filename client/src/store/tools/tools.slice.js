import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  entities: null,
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    toolsRLoadet(state, action) {
      console.log(action.payload, "payload");
      state.entities = action.payload;
    },
  },
});

const { reducer: toolsReducer, actions } = toolsSlice;
const { toolsRLoadet } = actions;

export const loadTools = (tools) => (dispatch, getState) => {
  dispatch(toolsRLoadet(tools));
};

export const getTollBuID = (id) => (state) => {
  console.log(state.entities);
  const tool = state.entities.filter((item) => item._id === id);
  return tool;
};

export default toolsReducer;
