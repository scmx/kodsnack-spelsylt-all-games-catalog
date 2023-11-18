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
  /** How high up in the list to show this */
  priority: number;
  thumb?: string;
  /** Rank in the jam */
  rank: number;
  /** Number of ratings */
  ratings: number;
  /** Final score */
  score: number;
  platforms: Platforms;
  jamTitle?: string;
}

export interface Author {
  name: string;
  submissionsCount: number;
}

export interface Platforms {
  web?: boolean;
  windows?: boolean;
  mac?: boolean;
  linux?: boolean;
  love2d?: boolean;
}
