import { ButtonSize, ButtonVariants } from "./Button.types";
import type { Props } from "./Button.types";
import styles from "./Button.module.scss";

export const Button = ({
  size = ButtonSize.Default,
  variant = ButtonVariants.Unstyled,
  onClick,
  href,
  Icon,
  external,
  className,
  children,
  ...props
}: Props) => {
  let classes = `${styles.button}`;

  if (Icon) {
    switch (size) {
      case ButtonSize.Large:
        classes = `${classes} ${styles.largeIcon}`;
        break;
      default:
        classes = `${classes} ${styles.icon}`;
    }
  }

  switch (variant) {
    case ButtonVariants.Primary:
      classes = `${classes}  ${styles.primary}`;
      break;
    case ButtonVariants.Secondary:
      classes = `${classes}  ${styles.secondary}`;
      break;
    case ButtonVariants.Text:
      classes = `${classes}  ${styles.textButton}`;
      break;
    case ButtonVariants.Unstyled:
      break;
    default:
      throw new Error(`ButtonVariants enum has illegal value ${variant}`);
  }

  if (className) {
    classes = `${classes} ${className}`;
  }

  if (href != null) {
    return (
      <a
        class={classes}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {/* {icon || children} */}
      </a>
    );
  }

  if (onClick != null) {
    return (
      <button class={classes} onclick={onClick}>
        {Icon || children}
        {/* {<Icon />} */}
      </button>
    );
  }

  throw new Error("href or onClick must be supplied");
};
