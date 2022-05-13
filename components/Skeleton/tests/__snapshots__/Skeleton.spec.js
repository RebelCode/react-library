import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Skeleton } from "../../index";

afterEach(cleanup);

describe("Skeleton", () => {
  const Comp = (
    <Skeleton aria-label="Skeleton">
      <h1>One</h1>
      <h1>Two</h1>
    </Skeleton>
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("Skeleton")).toBeTruthy();
  });
});
