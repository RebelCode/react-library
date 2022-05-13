import React from "react";
import { render, cleanup } from "@testing-library/react";
import { TextField } from "../index";

afterEach(cleanup);

describe("TextField", () => {
  const Comp = <TextField />

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("TextField")).toBeTruthy();
  });
});
