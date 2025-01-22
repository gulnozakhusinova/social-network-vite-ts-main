import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'
import { baseUrl } from "../../utils/baseUrl"
import { GetAllPostsResponse, GetPostByIdResponse } from './types'



export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<GetAllPostsResponse, null>({
      query: () => `/post`,
    }),
    getPostById: builder.query<GetPostByIdResponse, number>({
      query: (post_id) => `/post?post_id=${post_id}`,
    }),

  }),
})


export const { useGetAllPostsQuery ,useGetPostByIdQuery} = PostApi