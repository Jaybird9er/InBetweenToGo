import styles from "../../../../page.module.css";
import BetPanel from "./BetPanel/BetPanel";
import PlayDeal from "./PlayDeal";

function Buttons() {
    return (
        <div className={styles.Buttons}>
        <BetPanel />
        <PlayDeal />
        </div>
    );
}

export default Buttons;
  