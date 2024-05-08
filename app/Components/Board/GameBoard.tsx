import styles from "../../page.module.css";
import CardGutter from "./CardGutter/CardGutter";
import Pot from "./Pot";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import newDeck from "../Deck/newDeck";

function GameBoard() {
    return (
      <section className={styles.Gameboard}>
        <CardGutter card={newDeck} />
        <Pot />
        <ButtonPanel />
      </section>
    );
  }

  export default GameBoard;