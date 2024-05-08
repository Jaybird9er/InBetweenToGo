import styles from "../../../page.module.css";
import BetDisplay from "./BetDisplay";
import Buttons from "./Buttons/Buttons";

function ButtonPanel() {
    return (
      <section className={styles.Button_Panel}>
        <BetDisplay />
        <Buttons />
      </section>
    );
  }

  export default ButtonPanel;