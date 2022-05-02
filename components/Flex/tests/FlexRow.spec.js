import React from "react";
import { render, cleanup } from "@testing-library/react";
import { FlexRow, FlexColumn } from "../index";

afterEach(cleanup);

describe("FlexRow", () => {
  const Comp = (
    <FlexRow>
      <FlexColumn>
        <a href="">One</a>
        <a href="">Two</a>
      </FlexColumn>
      <FlexColumn>
        <a href="">Three</a>
        <a href="">Four</a>
      </FlexColumn>
    </FlexRow>
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("FlexRow")).toBeTruthy();
  });
});
