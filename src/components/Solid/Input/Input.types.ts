import { type JSX } from "solid-js";

export interface InputProps {
  id: string;
  type: "text" | "email" | "tel" | "password" | "url" | "date";
  label?: string;
  placeholder?: string;
  icon?: string;
  value?: string | undefined;
  error?: string;
  required?: boolean;
  onClear?: () => {};
  ref?: (element: HTMLInputElement) => void;
  onInput?: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange?: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur?: JSX.EventHandler<HTMLInputElement, FocusEvent>;
}
