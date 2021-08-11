import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  test("", () => {
    const { getByText } = render(<App />);
    getByText("hi");
  });
});
