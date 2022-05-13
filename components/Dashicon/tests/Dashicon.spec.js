import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Dashicon } from "../index";

afterEach(cleanup);

describe("Dashicon", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Dashicon icon="menu" />);

    expect(asFragment(<Dashicon icon="menu" />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<Dashicon icon="menu" />);

    expect(queryByLabelText("Dashicon")).toBeTruthy();
  });
});
