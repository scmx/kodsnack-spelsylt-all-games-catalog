export interface Jam {
  title: string;
  id: string;
  link: string;
  games: Game[];
}

export interface Game {
  title: string;
  author: string;
  link: string;
  thumb: string;
  rank: number;
}

export interface Author {
  name: string;
  submissionsCount: number;
}
