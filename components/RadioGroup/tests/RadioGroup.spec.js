import React from "react";
import { render, cleanup } from "@testing-library/react";
import { RadioGroup } from "../index";

afterEach(cleanup);

describe("RadioGroup", () => {
  const Comp = (
    <RadioGroup
      name="multiChoice"
      value="multipleDaily"
      options={[
        {
          value: "multipleDaily",
          label: "Multiple times a day.",
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

    expect(queryByLabelText("RadioGroup")).toBeTruthy();
  });
});
