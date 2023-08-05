import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toolsApi = createApi({
  reducerPath: "tools/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  endpoints: (build) => ({
    tools: build.query({
      query: () => ({
        url: "tools",
      }),
      transformResponse: (respons) => respons.list,
    }),
    tool: build.query({
      query: (id) => ({
        url: `tools/${id}`,
      }),
    }),
  }),
});

export const { useToolsQuery, useToolQuery } = toolsApi;
