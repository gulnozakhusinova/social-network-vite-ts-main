import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

export const AuthApi2 = createApi({
  reducerPath: 'AuthApi2',
  baseQuery: fetchBaseQuery({ baseUrl:'https://genius-song-lyrics1.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", '97c141f4f3msh596a2691c9d6654p146f8djsn9c3d1c9f57ff');
      headers.set("X-RapidAPI-Host", 'genius-song-lyrics1.p.rapidapi.com');
      return headers;
  } }),
  endpoints: (builder) => ({
    getAllSmth: builder.query<any, any>({
      query: () => '/chart/songs/',
    }),
  }),
})

export const {useGetAllSmthQuery} = AuthApi2