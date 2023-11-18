import { Jam } from "./types";
import rawJams from "./generated.json";

export const jams = rawJams.jams as Record<string, Jam>;
Object.values(jams).forEach((jam) => {
  jam.games.forEach((game) => {
    const score = game.score * 2;
    const ordinal = (1 / game.rank) * 10;
    const thumb = game.thumb ? 10 : 0;
    const platformCount = Object.keys(game.platforms).length;
    const platform = platformCount ? 5 + platformCount : 0;
    const recent = Number(jam.id.split("_").pop());
    game.priority = score + ordinal + thumb + platform + recent;
    game.jamTitle = jam.title;
  });
});
