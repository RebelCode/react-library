import React from "react";
import { render, cleanup } from "@testing-library/react";
import {OrSeparator} from "../index";

afterEach(cleanup);

describe("OrSeparator", () => {
  const Comp = (
    <OrSeparator />
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("OrSeparator")).toBeTruthy();
  });
});
