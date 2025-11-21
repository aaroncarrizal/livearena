export interface MatchResponse {
  id: string;
  title: string;
  category: Category;
  date: number;
  popular: boolean;
  sources: StreamSource[];
  teams?: MatchTeams | null;
  poster?: string;
}

export type Category =
  | 'afl'
  | 'american-football'
  | 'baseball'
  | 'basketball'
  | 'billiards'
  | 'cricket'
  | 'darts'
  | 'fight'
  | 'football'
  | 'golf'
  | 'hockey'
  | 'motor-sports'
  | 'other'
  | 'rugby'
  | 'tennis';

export interface StreamSource {
  source: SourceEnum;
  id: string;
}

export type SourceEnum = 'admin' | 'alpha' | 'bravo' | 'charlie' | 'delta' | 'echo' | 'foxtrot' | 'golf' | 'intel';

export interface MatchTeams {
  home: Team;
  away: Team;
}

export interface Team {
  name: string;
  badge?: string;
}
