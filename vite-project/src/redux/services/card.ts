import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCard, ICard } from '../../models';
import fetch from 'node-fetch';

// interface IResponseGetCard {
//   cards: ICard[],
//   count: number,
//   pages: number,
//   next: string | null,
//   prev: string | null,
// }

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character' /*,fetchFn: fetch*/,
  }),

  endpoints: (builder) => ({
    getCards: builder.query<IGetCard, string>({
      query: (name) => `?name=${name}`,
      // transformResponse: (response: IGetCard) => ({
      //   cards: response.results,
      //   count: response.info.count,
      //   pages: response.info.pages,
      //   next: response.info.next,
      //   prev: response.info.prev,
      // }),
    }),
    getCard: builder.query<ICard, number>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCardsQuery, useGetCardQuery } = cardApi;
