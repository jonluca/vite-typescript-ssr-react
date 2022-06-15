import React from "react";
import { render, renderHook, act } from "@testing-library/react";
import { Footer } from "../client/components/Footer";
import useCounter from "./testingHook";

describe("demo", () => {
  it("should be testable", () => {
    expect(1 + 1).toBe(2);
  });
  it("should be able to test component", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Repo")).toBeInTheDocument();
  });
  it("should be able to test hook", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
