import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),

  endpoints: (builder) => ({
    post: builder.mutation({
      query: (message) => {
        return {
          url: "post",
          method: "POST",
          body: { message },
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getPosts: builder.query({
      query: () => "get-post", 
    }),
  }),
 });

export const { usePostMutation, useGetPostsQuery } = postApi;
