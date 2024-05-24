import fs from "node:fs";
import { getSysInfo } from "./sys.js";
import { root } from "../lib.js";

interface LogContent {
  type: "debug" | "info" | "warn" | "error";
  content: string;
  time: number;
  title?: string;
}

type LogLevels = 0 | 1 | 2 | 3;

interface Log {
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

export function writeLog(log: Log) {}
