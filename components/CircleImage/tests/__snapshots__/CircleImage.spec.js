import React from "react";
import { render, cleanup } from "@testing-library/react";
import { CircleImage } from "../../index";

afterEach(cleanup);

describe("CircleImage", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(
      <CircleImage aria-label="CircleImage" />
    );

    expect(asFragment(<CircleImage />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<CircleImage aria-label="CircleImage" />);

    expect(queryByLabelText("CircleImage")).toBeTruthy();
  });

  it("renders text correctly", () => {
    const { queryByLabelText } = render(
      <CircleImage aria-label="CircleImage" />
    );

    expect(queryByLabelText("CircleImage")).toBeTruthy();
  });
});
