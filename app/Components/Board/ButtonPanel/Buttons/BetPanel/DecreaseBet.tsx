import styles from "../../../../../page.module.css";

function DecreaseBet(props: { changeBet(state: boolean): void }) {
  function change() {
    props.changeBet(false);
  }

  return (
    <button className={styles.Decrease_Bet} onClick={change}>
      -
    </button>
  );
}

export default DecreaseBet;