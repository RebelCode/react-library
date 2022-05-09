import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Icon } from "../../index";

afterEach(cleanup);

describe("Icon", () => {
  const Comp = (
    <Icon aria-label="Icon"  />
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(<Icon />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("Icon")).toBeTruthy();
  });
});
