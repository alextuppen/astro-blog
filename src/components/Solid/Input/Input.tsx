import { Button } from "../Button";
import { Cross } from "../../../svg/Solid";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import { Dynamic } from "solid-js/web";
import { createSignal, type JSX } from "solid-js";

export const Input = ({
  icon,
  id,
  value,
  error,
  onClear: propsOnClear,
  onInput: propsOnInput,
  ...rest
}: InputProps) => {
  const [selfHasValue, setSelfHasValue] = createSignal<boolean>(false);

  const getSelf = () => document.getElementById(id);
  const selfIsValid = (s: HTMLElement | null): s is HTMLInputElement =>
    s != null && s instanceof HTMLInputElement;

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    const self = getSelf();

    if (selfIsValid(self)) {
      if (self.value !== "") {
        setSelfHasValue(true);
      } else {
        setSelfHasValue(false);
      }
    }

    if (propsOnInput != null) {
      propsOnInput(e);
    }
  };

  const onClear = () => {
    const self = getSelf();

    if (selfIsValid(self)) {
      self.value = "";
      setSelfHasValue(false);
    }

    if (propsOnClear != null) {
      propsOnClear();
    }
  };

  return (
    <div class={styles.wrapper}>
      {icon ? <Dynamic component={icon} className={styles.icon} /> : null}
      <input
        {...rest}
        id={id}
        value={value || ""}
        aria-invalid={!!error}
        aria-errormessage={`${id}-error`}
        oninput={onInput}
      />
      {propsOnClear != null && selfHasValue() === true ? (
        <Button onClick={onClear} className={styles.button}>
          <Cross className={styles.icon} />
        </Button>
      ) : null}
    </div>
  );
};
