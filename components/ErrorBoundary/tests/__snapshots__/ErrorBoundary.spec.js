import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ErrorBoundary } from "../../index";

afterEach(cleanup);

describe("ErrorBoundary", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(
      <ErrorBoundary />
    );

    expect(asFragment(<ErrorBoundary />)).toMatchSnapshot();
  });
});
