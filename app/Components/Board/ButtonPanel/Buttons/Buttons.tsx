import styles from "../../../../page.module.css";
import BetPanel from "./BetPanel/BetPanel";
import PlayDeal from "./PlayDeal";

function Buttons(props: { changeBet(state: boolean): void }) {

    return (
        <div className={styles.Buttons}>
        <BetPanel changeBet={props.changeBet} />
        <PlayDeal />
        </div>
    );
}

export default Buttons;
  