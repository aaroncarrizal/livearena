import axios from 'axios';

export const streamedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STREAMED_API_URL
});
