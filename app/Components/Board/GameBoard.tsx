import styles from "../../page.module.css";
import CardGutter from "./CardGutter/CardGutter";
import Pot from "./Pot";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import newDeck from "../Deck/newDeck";
import { useState, useEffect } from "react";
import { Changa_One } from "next/font/google";

function GameBoard() {
  let pot = false ? 10 : 5 ;
  // let bet = true ? 1 : 4;
  const [bet, setBet] = useState(0);


  function changeBet(state: boolean): void {
    if (!state && bet === 0) {
      setBet(0);
    } else if (!state) {
      setBet(bet - 1);
    } else {
      setBet(bet + 1);
    }
  }
  
  // to address hydration issue caused by the calling newDeck (discrepency between card text on server and client side), the State and Effect hooks allow for the server and client sides to first render identical information (null in this case), and then after the client has hydrated, it allows the client to render fully
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  if (!hydrated) {
    return null;
  }
  
  return (
    <section className={styles.Gameboard}>
      <CardGutter card={newDeck} />
      <Pot pot={pot} />
      <ButtonPanel bet={bet} changeBet={changeBet} />
    </section>
  );
}

export default GameBoard;