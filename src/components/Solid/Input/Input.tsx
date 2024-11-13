import { Button, ButtonSize } from "../Button";
import { Cross } from "../../../svg/Solid";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input = ({
  icon,
  id,
  value,
  onClear: propsOnClear,
  error,
  ...rest
}: InputProps) => {
  const onClear = () => {
    const self = document.getElementById(id);

    if (self != null && self instanceof HTMLInputElement) {
      self.value = "";
    }

    if (propsOnClear != null) {
      propsOnClear();
    }
  };

  let classes = String();

  if (icon == null) {
    classes = `${classes} ${styles.inputNoIcon}`;
  } else {
    classes = `${classes} ${styles.inputIcon}`;
  }

  return (
    <div class={styles.wrapper}>
      <input
        {...rest}
        class={classes}
        style={icon ? `background-image: url(${icon});` : ""}
        id={id}
        value={value || ""}
        aria-invalid={!!error}
        aria-errormessage={`${id}-error`}
      />
      {propsOnClear == null ? null : (
        <Button size={ButtonSize.Default} Icon={<Cross />} onClick={onClear} />
      )}
    </div>
  );
};
