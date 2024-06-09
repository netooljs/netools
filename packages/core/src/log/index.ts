import { getSysInfo } from "./sys.js";

interface LogContent {
  type: "debug" | "info" | "warn" | "error";
  content: string;
  time: number;
  title?: string;
}

type LogLevels = 0 | 1 | 2 | 3;

export interface Log {
  title: string;
  env: Record<string, string>;
  start: number;
  end?: number;
  logLevel: LogLevels;
  contents: LogContent[];
}

export function createLog(title: string, logLevel: LogLevels = 1): Log {
  return {
    title,
    env: getSysInfo(),
    start: Date.now(),
    logLevel: logLevel,
    contents: [],
  };
}
