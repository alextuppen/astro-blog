import { splitProps } from "solid-js";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = (props: InputProps) => {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);

  let classes = String();

  if (props.icon == null) {
    classes = `${classes} ${styles.inputNoIcon}`;
  } else {
    classes = `${classes} ${styles.inputIcon}`;
  }

  return (
    <div>
      {props.label && (
        <label for={props.name}>
          {props.label} {props.required && <span>*</span>}
        </label>
      )}
      <input
        {...inputProps}
        class={classes}
        style={props.icon ? `background-image: url(${props.icon});` : ""}
        id={props.name}
        value={props.value || ""}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      {props.error && <div id={`${props.name}-error`}>{props.error}</div>}
    </div>
  );
};
