import React from "react";
import { render, cleanup } from "@testing-library/react";
import { WpLoadingSpinner } from "../../index";

afterEach(cleanup);

describe("Skeleton", () => {
  const Comp = (
    <WpLoadingSpinner />
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("WpLoadingSpinner")).toBeTruthy();
  });
});
