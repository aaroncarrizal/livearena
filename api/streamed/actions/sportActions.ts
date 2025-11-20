import { streamedApi } from '../streamedApi';
import { SportResponse } from '../types/sport.response';

export const getAllSports = async (): Promise<SportResponse[]> => {
  const { data } = await streamedApi.get('/sports');
  return data;
};
