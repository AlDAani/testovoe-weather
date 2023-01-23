import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeatherDataRequest, IWeatherDataResponse } from "core/api/main/types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getWeatherList: builder.query<IWeatherDataResponse, IWeatherDataRequest>({
      query: ({ query }) =>
        `data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_TOKEN}`,
    }),
  }),
});

export const { useGetWeatherListQuery } = mainApi;
