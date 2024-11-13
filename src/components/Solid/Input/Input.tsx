import { splitProps } from "solid-js";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = (props: InputProps) => {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);

  return (
    <div>
      {props.label && (
        <label for={props.name}>
          {props.label} {props.required && <span>*</span>}
        </label>
      )}
      <input
        {...inputProps}
        class={styles.input}
        id={props.name}
        value={props.value || ""}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      {props.error && <div id={`${props.name}-error`}>{props.error}</div>}
    </div>
  );
};
