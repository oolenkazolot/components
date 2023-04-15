import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCard, ICard } from '../../models';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
  }),

  endpoints: (builder) => ({
    getCards: builder.query<IGetCard, string>({
      query: (name) => `?name=${name}`,
    }),
    getCard: builder.query<ICard, number>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCardsQuery, useGetCardQuery } = cardApi;
