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
  platforms: Platforms;
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
