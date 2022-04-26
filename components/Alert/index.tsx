import React, { CSSProperties, ReactNode } from "react";
import css from "./Alert.pcss";
import { classList } from "../../utils/classes";
import { Dashicon, DashiconTy } from "../Dashicon";

type AlertType =
  | "success"
  | "info"
  | "pro-tip"
  | "premium"
  | "warning"
  | "error"
  | "grey";

export type Props = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  type: AlertType;
  showIcon?: boolean;
  shake?: boolean;
  centered?: boolean;
  isDismissible?: boolean;
  onDismiss?: () => void;
};

export function Alert({
  className,
  style,
  children,
  type,
  showIcon,
  shake,
  centered,
  isDismissible,
  onDismiss,
}: Props) {
  const [dismissed, setDismissed] = React.useState(false);

  const handleClick = () => {
    if (isDismissible) {
      setDismissed(true);
      onDismiss && onDismiss();
    }
  };

  const fullClassName = classList(
    css[type],
    (shake && css.shaking||""),
   ( centered && css.centered||""),
    className as string
  );
  
  return dismissed ? null : (
    <div className={fullClassName} style={style}>
      {showIcon && (
        <Dashicon className={css.icon} icon={getIconFor(type)} />
      )}

      <div className={css.content}>{children}</div>

      {isDismissible && (
        <button className={css.dismissBtn} onClick={handleClick}>
          <Dashicon icon="no" className={css.dashicon} />
        </button>
      )}
    </div>
  );
}

/**
 * Retrieves the appropriate dashicon for a given message type.
 *
 * @param type
 */
function getIconFor(type: AlertType): DashiconTy {
  switch (type) {
    case "success":
      return "yes-alt";
    case "pro-tip":
      return "lightbulb";
    case "error":
    case "warning":
      return "warning";
    case "info":
    default:
      return "info";
  }
}
