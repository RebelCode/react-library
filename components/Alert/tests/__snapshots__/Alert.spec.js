import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Alert } from "../../index";

afterEach(cleanup);

describe("Alert", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(
      <Alert aria-label="Alert" type={"success"} />
    );

    expect(asFragment(<Alert type={"success"} />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<Alert aria-label="Alert" />);

    expect(queryByLabelText("Alert")).toBeTruthy();
  });

  it("renders text correctly", () => {
    const { queryByText } = render(
      <Alert aria-label="Alert" children="Success" />
    );

    expect(queryByText("Success")).toBeTruthy();
    expect(queryByText("Failed")).toBeFalsy();
  });
});
