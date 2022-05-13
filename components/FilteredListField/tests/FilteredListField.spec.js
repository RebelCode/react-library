import React from "react";
import { render, cleanup } from "@testing-library/react";
import { FilteredListField } from "../index";

afterEach(cleanup);

describe("FilteredListField", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<FilteredListField />);

    expect(asFragment(<FilteredListField />)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(<FilteredListField />);

    expect(queryByLabelText("ListField")).toBeTruthy();
  });
});
