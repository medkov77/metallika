import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const optionsApi = createApi({
  reducerPath: "options/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  endpoints: (build) => ({
    options: build.query({
      query: () => ({
        url: "options",
      }),
    }),
  }),
});

export const { useOptionsQuery } = optionsApi;
