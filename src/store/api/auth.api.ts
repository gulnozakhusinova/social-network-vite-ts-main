import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'
import { baseUrl } from "../../utils/baseUrl"

interface GetUserByIdResponse {
  status: number,
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;
  }

}

export const AuthApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserByIdResponse, number>({
      query: (id) => `/user?user_id=${id}`,
    }),
  }),
})


export const { useGetUserByIdQuery } = AuthApi