import React from "react";
import { render, cleanup } from "@testing-library/react";
import { FlexColumn } from "../index";

afterEach(cleanup);

describe("FlexColumn", () => {
  const Comp = (
    <FlexColumn align="flex-start">
      <a href="">Go to Posts</a>
      <a href="">Go to Posts</a>
    </FlexColumn>
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp)

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("FlexColumn")).toBeTruthy();
  });
});
