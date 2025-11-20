import { streamedApi } from '../streamedApi';
import { SourceEnum } from '../types/match.response';
import { StreamResponse } from '../types/stream.response';

export const getStreamsBySourceAction = async (source: SourceEnum, sourceId: string): Promise<StreamResponse[]> => {
  const { data } = await streamedApi.get<StreamResponse[]>(`/stream/${source}/${sourceId}`);
  return data;
};
