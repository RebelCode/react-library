import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ColorPicker } from "../index";

afterEach(cleanup);

describe("ColorPicker", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<ColorPicker />);

    expect(asFragment(<ColorPicker />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<ColorPicker />);

    expect(queryByLabelText("ColorPicker")).toBeTruthy();
  });
});
