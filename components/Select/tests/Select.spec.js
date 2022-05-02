import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Select } from "../index";

afterEach(cleanup);

describe("Select", () => {
  const Comp = (
    <Select
      name="country"
      options={[
        {
          value: "Malta",
          label: "Malta",
        },
        {
          value: "France",
          label: "France",
        },
      ]}
    />
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("Select")).toBeTruthy();
  });
});
