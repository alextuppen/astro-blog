import { ExclamationCircle } from "../../../../svg/Solid";
import styles from "./NoResultsFound.module.scss";

export const NoResultsFound = () => (
  <div class={styles.wrapper}>
    <ExclamationCircle className={styles.icon} />
    <div class={styles.body}>
      <h5 class={styles.title}>No results found</h5>
      <p>Please modify your search</p>
    </div>
  </div>
);
