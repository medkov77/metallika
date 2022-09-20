import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { toolsApi } from "./tools/tools.api";
import { optionsApi } from "./options/options.api";
import basketReducer from "./basket/basket.slice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [toolsApi.reducerPath]: toolsApi.reducer,
    [optionsApi.reducerPath]: optionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toolsApi.middleware, optionsApi.middleware),
});
