import { describe, expect, it } from "vitest";
import { isHtmlNavigationRequest } from "../server/html-navigation.js";

describe("isHtmlNavigationRequest", () => {
  it("accepts browser navigation requests", () => {
    expect(isHtmlNavigationRequest("GET", "/account/settings", "text/html,application/xhtml+xml")).toBe(true);
    expect(isHtmlNavigationRequest("HEAD", "/account/settings", "text/html")).toBe(true);
  });

  it("rejects resource and non-navigation requests", () => {
    expect(isHtmlNavigationRequest("GET", "/missing.js", "text/html,*/*")).toBe(false);
    expect(isHtmlNavigationRequest("GET", "/api/missing", "application/json,*/*")).toBe(false);
    expect(isHtmlNavigationRequest("GET", "/api/missing", "*/*")).toBe(false);
    expect(isHtmlNavigationRequest("POST", "/account/settings", "text/html")).toBe(false);
    expect(isHtmlNavigationRequest("GET", "/account/settings", "text/html;q=0,*/*")).toBe(false);
  });
});
