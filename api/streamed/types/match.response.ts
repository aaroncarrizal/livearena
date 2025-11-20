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

export enum Category {
  Afl = 'afl',
  AmericanFootball = 'american-football',
  Baseball = 'baseball',
  Basketball = 'basketball',
  Billiards = 'billiards',
  Cricket = 'cricket',
  Darts = 'darts',
  Fight = 'fight',
  Football = 'football',
  Golf = 'golf',
  Hockey = 'hockey',
  MotorSports = 'motor-sports',
  Other = 'other',
  Rugby = 'rugby',
  Tennis = 'tennis'
}

export interface StreamSource {
  source: SourceEnum;
  id: string;
}

export enum SourceEnum {
  Admin = 'admin',
  Alpha = 'alpha',
  Bravo = 'bravo',
  Charlie = 'charlie',
  Delta = 'delta',
  Echo = 'echo',
  Foxtrot = 'foxtrot',
  Golf = 'golf',
  Intel = 'intel'
}

export interface MatchTeams {
  home: Team;
  away: Team;
}

export interface Team {
  name: string;
  badge?: string;
}
