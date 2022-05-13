import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Checkbox } from "../index";

afterEach(cleanup);

describe("Checkbox", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Checkbox onChange={() => {}} />);

    expect(asFragment(<Checkbox onChange={() => {}} />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<Checkbox onChange={() => {}} />);

    expect(queryByLabelText("Checkbox")).toBeTruthy();
  });

  it("renders text correctly", () => {
    const { queryByLabelText } = render(
      <Checkbox onChange={() => {}} />
    );

    expect(queryByLabelText("Checkbox")).toBeTruthy();
  });
});
