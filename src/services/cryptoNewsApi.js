import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders =  {
    'x-rapidapi-key': '5d24fa944cmsh32b8c89eaa9700ap1c6757jsn65a0d8690cbb',
    'x-rapidapi-host': 'google-news13.p.rapidapi.com'
  }

const baseUrl = 'https://google-news13.p.rapidapi.com';

const createRequest = (url) => ({ url, headers : cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCrytoNewsQuery } = cryptoNewsApi;