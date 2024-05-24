import os from "node:os";

export function getSysInfo(): Record<string, string> {
  return {
    System: os.type(),
    Platform: os.platform(),
    Arch: os.arch(),
    Release: os.release(),
    Uptime: os.uptime().toString(),
    Hostname: os.hostname(),
    User: os.userInfo().username,
  };
}
