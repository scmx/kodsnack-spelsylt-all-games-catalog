import { Jam } from "./types";
import rawJams from "./generated.json";

export const jams = rawJams.jams as Record<string, Jam>;
