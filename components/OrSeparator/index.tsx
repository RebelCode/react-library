import React from "react";
import css from "./OrSeperator.pcss";
import { FlexRow } from "../Flex";

export function OrSeparator() {
  return (
    <FlexRow
      justify="center"
      align="center"
      aria-label="OrSeparator"
      className={css.container}
    >
      <div className={css.line} />
      <span className={css.text}>OR</span>
      <div className={css.line} />
    </FlexRow>
  );
}
