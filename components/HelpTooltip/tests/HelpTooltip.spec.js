import React from "react";
import { render, cleanup } from "@testing-library/react";
import HelpTooltip from "../index";

afterEach(cleanup);

describe("HelpTooltip", () => {
  const Comp = (
    <HelpTooltip maxWidth={200}>
      One, Two. Three
    </HelpTooltip>
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("HelpTooltip")).toBeTruthy();
  });
});
