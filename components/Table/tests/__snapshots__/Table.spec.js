import React from "react";
import { render, cleanup } from "@testing-library/react";
import Table from "../../index";

afterEach(cleanup);

describe("Table", () => {
  const Comp = (
    <Table
      cols={[
        {
          id: "name",
          label: "Name",
          render: (feed) => <h1>col</h1>,
        },
      ]}
      rows={[
        {
          id: "name",
          label: "Name",
          render: (feed) => <h1>rows</h1>,
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

    expect(queryByLabelText("Table")).toBeTruthy();
  });
});
