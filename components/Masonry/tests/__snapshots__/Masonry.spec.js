import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Masonry } from "../../index";

afterEach(cleanup);

describe("Skeleton", () => {
  const Comp = (
    <Masonry columns={2} gap={2} aria-label="Masonry">
      <h1>One</h1>
      <h1>Two</h1>
    </Masonry>
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("Masonry")).toBeTruthy();
  });
});
