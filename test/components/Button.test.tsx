import React from "react";
import { render } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  test("include text", () => {
    const text = "hi";
    const { getByText } = render(<Button text={text} />);
    getByText(text);
  });
});
