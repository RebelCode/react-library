import React from "react";
import { render, cleanup } from "@testing-library/react";
import { TextArea } from "../index";

afterEach(cleanup);

describe("TextArea", () => {
  const Comp = <TextArea />

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("TextArea")).toBeTruthy();
  });
});
