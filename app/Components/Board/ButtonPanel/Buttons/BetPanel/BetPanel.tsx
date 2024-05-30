import styles from "../../../../../page.module.css";
import DecreaseBet from "./DecreaseBet";
import IncreaseBet from "./IncreaseBet";

function BetPanel(props: { changeBet(state: boolean): void }) {
    return (
      <div className={styles.Bet_Panel}>
        <IncreaseBet changeBet={props.changeBet} />
        <DecreaseBet changeBet={props.changeBet} />
      </div>
    );
  }

  export default BetPanel;