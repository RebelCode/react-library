import React from "react";
import { render, cleanup } from "@testing-library/react";
import Tooltip from "../index";

afterEach(cleanup);

describe("Tooltip", () => {
  const Comp = (
    <Tooltip
      visible={true}
      children={[() => <button>Submit</button>, <h1>sdlkmsldkksm</h1>]}
    />
  );

  it("should take a snapshot", () => {
    const { asFragment } = render(Comp);

    expect(asFragment(Comp)).toMatchSnapshot();
  });

  // it("renders correctly", () => {
  //   const { queryByLabelText } = render(Comp);

  //   expect(queryByLabelText("Tooltip")).toBeTruthy();
  // });
});
