import { ButtonSize, ButtonVariants } from "./Button.types";
import type { Props } from "./Button.types";
import styles from "./Button.module.scss";

export const Button = ({
  size = ButtonSize.Default,
  variant = ButtonVariants.Unstyled,
  onClick,
  href,
  icon,
  external,
  className,
  children,
  ...props
}: Props) => {
  let classes = `${styles.button}`;

  if (icon) {
    switch (size) {
      case ButtonSize.Default:
        classes = `${classes} ${styles.icon}`;
        break;
      case ButtonSize.Large:
        classes = `${classes} ${styles.largeIcon}`;
        break;
      default:
        throw new Error(`ButtonSize enum has illegal value ${size}`);
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
        {icon || children}
      </a>
    );
  }

  if (onClick != null) {
    return (
      <button class={classes} onclick={onClick}>
        {icon || children}
      </button>
    );
  }

  throw new Error("href or onClick must be supplied");
};
