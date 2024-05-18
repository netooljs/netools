import { describe, expect, it, vi } from "vitest";

import colors from "colors";
import { createOutput } from "../src";

describe("log: createOutput", () => {
  it("should create an output object", () => {
    const output = createOutput("test");
    expect(output.warn).toBeDefined();
    expect(output.error).toBeDefined();
    expect(output.log).toBeDefined();
  });

  const consoleSpy = vi.spyOn(console, "log");
  consoleSpy.mockImplementation(() => {});

  it("should log a message", () => {
    const output = createOutput("test");
    output.log("Hello, world!");

    expect(consoleSpy).toHaveBeenCalledWith("[test] Hello, world!");

    consoleSpy.mockReset();
  });

  it("should log a warning", () => {
    const output = createOutput("test");
    output.warn("Hello, world!");

    expect(consoleSpy).toHaveBeenCalledWith("[test] Hello, world!".yellow);

    consoleSpy.mockReset();
  });

  it("should log an error", () => {
    const output = createOutput("test");
    output.error("Hello, world!");

    expect(consoleSpy).toHaveBeenCalledWith("[test] Hello, world!".red);

    consoleSpy.mockReset();
  });
});
