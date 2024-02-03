import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = import.meta.env.VITE_API_KEY
const url = import.meta.env.VITE_API_URL

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => ({
        url: `games?key=${key}&page_size=12`,
        params: {
          headers: {
            'Content-Type': 'application/json' 
          }
        },
      }),
      transformResponse: (response) =>
        response.results.map((item) => ({
          id: item.id,
          title: item.name,
          image: item.background_image
        })),
    }),
    getGamesInfo: builder.query({
      query: (gameId) => `games/${gameId}?key=${key}`,
      transformResponse: (game) => ({
        id: game.id,
        title: game.name,
        image: game.background_image,
        release: game.released,
        rating: game.rating,
        description: game.description
      }),
    }),
    getSearchResults: builder.query({
      query: (searchString) => ({
        url: `games?search=${searchString}&&key=${key}`,
        params: {
          headers: {
            'Content-Type': 'application/json' 
          }
        },
      }),
      transformResponse: (response) =>
        response.results.map((item) => ({
          id: item.id,
          title: item.name,
          image: item.background_image
        })),
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGamesInfoQuery,
  useGetSearchResultsQuery
} = gamesApi;
