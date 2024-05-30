import styles from "../../../page.module.css";
import BetDisplay from "./BetDisplay";
import Buttons from "./Buttons/Buttons";

interface ChildProps {
  testFn: () => void;
}

function ButtonPanel( props: {bet: number, changeBet(state: boolean): void} ) {
  // if (props.bet === 0) {
  //   props.changeBet(true);
  // }

  return (
    <section className={styles.Button_Panel}>
      <BetDisplay bet={props.bet} />
      <Buttons changeBet={props.changeBet} />
    </section>
  );
}

export default ButtonPanel;