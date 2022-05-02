import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Alert } from "../../index";

afterEach(cleanup);

describe("Alert", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Alert type={"success"} />);

    expect(asFragment(<Alert type={"success"} />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<Alert />);

    expect(queryByLabelText("Alert")).toBeTruthy();
  });
});
