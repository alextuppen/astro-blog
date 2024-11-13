import type { JSX } from "solid-js";

export enum ButtonSize {
  Default,
  Large,
}

export enum ButtonVariants {
  Primary,
  Secondary,
  Text,
  Unstyled,
}

export interface Props {
  size?: ButtonSize;
  variant?: ButtonVariants;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  href?: string;
  external?: boolean;
  icon?: Element;
  className?: string;
  children: Element | string;
}
