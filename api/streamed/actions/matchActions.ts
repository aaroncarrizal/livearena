import { streamedApi } from '../streamedApi';
import { MatchResponse } from '../types/match.response';

// export const getAllMatchesAction = async (): Promise<MatchResponse[]> => {
//   const { data } = await streamedApi.get('/matches/all');
//   return data;
// };

export const getAllLiveMatchesAction = async (): Promise<MatchResponse[]> => {
  const { data } = await streamedApi.get<MatchResponse[]>('/matches/live');
  return data;
};

// export const getMatchesBySportAction = async (sportId: string): Promise<MatchResponse[]> => {
//   const { data } = await streamedApi.get(`/matches/${sportId}`);
//   return data;
// };

export const getLiveMatchesBySportAction = async (sportId: string): Promise<MatchResponse[]> => {
  const { data } = await streamedApi.get<MatchResponse[]>(`/matches/live`);
  const matches = data.filter((match) => match.category == sportId);
  return matches;
};

export const getMostPopularLiveMatch = async (): Promise<MatchResponse> => {
  const { data } = await streamedApi.get<MatchResponse[]>('/matches/live/popular');
  return data[0];
};

export const getMatchByIdAction = async (matchId: string): Promise<MatchResponse> => {
  try {
    const { data } = await streamedApi.get<MatchResponse[]>('/matches/all');
    const match = data.find((m) => m.id === matchId);
    if (!match) {
      throw new Error(`Match with id: ${matchId} not found`);
    }
    return match;

  } catch (error) {
    console.error(error);
    throw error instanceof Error ? error : new Error('Unknown error');
  }
};
