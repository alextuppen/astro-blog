import { MouseEventHandler, ReactNode } from "react";
import { ComponentCommon } from "@types";

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

export interface ButtonProps extends ComponentCommon {
  size?: ButtonSize;
  variant?: ButtonVariants;
  onClick?: (this: HTMLElement, ev: MouseEvent) => any;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
}
