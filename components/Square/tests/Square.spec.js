import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Square } from "../index";

afterEach(cleanup);

describe("Square", () => {
  const Comp = (
    <Square>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </Square>
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("Square")).toBeTruthy();
  });
});
