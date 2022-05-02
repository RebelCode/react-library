import React, { MutableRefObject, useEffect } from "react";
import css from "./ColorPicker.pcss";
import ChromePicker from "react-color/lib/components/chrome/Chrome";
import { Color, MultiColor } from "react-color-types";
import { useDetectTabOut } from "../../hooks/useDetectTabOut";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useDocumentEventListener } from "../../hooks/useEventListener";
import { colorToString } from "../../utils/colorToString";
import { Manager, Popper, Reference } from "react-popper";
import { mergeRefs } from "../../utils/mergeRefs";

type Props = {
  id?: string;
  value?: Color;
  onChange?: (c: MultiColor) => void;
  disableAlpha?: boolean;
};

export function ColorPicker({ id, value, disableAlpha, onChange }: Props) {
  value = value ?? "#fff";

  const [color, setColor] = React.useState<Color>(value);
  const [isOpen, setOpen] = React.useState(false);
  const btn = React.useRef();
  const picker = React.useRef();

  const close = React.useCallback(() => setOpen(false), []);
  const toggle = React.useCallback(() => setOpen((v) => !v), []);

  const handleChange = React.useCallback(
    (color: MultiColor) => {
      document.getSelection() &&
        (document.getSelection() as Selection).removeAllRanges();
      setColor(color.rgb);
      onChange && onChange(color);
    },
    [onChange]
  );

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [isOpen]
  );

  useEffect(() => setColor(value as Color), [value]);
  useDetectOutsideClick(btn as any, close, [picker as any]);
  useDetectTabOut([btn as any, picker], close);
  useDocumentEventListener<KeyboardEvent>("keydown", onKeyDown, [isOpen]);

  const modifiers = {
    preventOverflow: {
      boundariesElement: document.body,
      padding: 5,
    },
  };

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <button
            ref={mergeRefs(btn, ref)}
            id={id}
            className={css.button}
            onClick={toggle}
          >
            <span
              data-testid="colorpicker"
              aria-label="ColorPicker"
              className={css.colorPreview}
              style={{ backgroundColor: colorToString(color) }}
            />
          </button>
        )}
      </Reference>
      <Popper placement="bottom-end" positionFixed={true} modifiers={modifiers}>
        {({ ref, style }) =>
          isOpen && (
            <div
              className={css.popper}
              ref={mergeRefs(picker, ref)}
              style={style}
            >
              <ChromePicker
                color={color}
                onChange={handleChange}
                disableAlpha={disableAlpha}
              />
            </div>
          )
        }
      </Popper>
    </Manager>
  );
}
