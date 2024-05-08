import styles from "../../../../../page.module.css";
import IncreaseBet from "./IncreaseBet";
import DecreaseBet from "./DecreaseBet";

function BetPanel() {
    return (
      <div className={styles.Bet_Panel}>
        <IncreaseBet />
        <DecreaseBet />
      </div>
    );
  }

  export default BetPanel;