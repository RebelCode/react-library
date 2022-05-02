import React from "react";
import { render, cleanup } from "@testing-library/react";
import {ListField} from "../index";

afterEach(cleanup);

describe("ListField", () => {
  const Comp = (
    <ListField value={["Hakonan", "shoe"]} />
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { queryByLabelText } = render(Comp);

    expect(queryByLabelText("ListField")).toBeTruthy();
  });
});
