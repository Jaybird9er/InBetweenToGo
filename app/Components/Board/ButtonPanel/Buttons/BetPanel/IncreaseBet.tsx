import { channel } from "diagnostics_channel";
import styles from "../../../../../page.module.css";

function IncreaseBet(props: { changeBet(state: boolean): void }) {
  function change() {
    props.changeBet(true);
  }

  return (
    <button className={styles.Increase_Bet} onClick={change} >
      +
    </button>
  );
}

export default IncreaseBet;