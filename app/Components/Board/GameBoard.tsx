import styles from "../../page.module.css";
import CardGutter from "./CardGutter/CardGutter";
import Pot from "./Pot";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import newDeck from "../Deck/newDeck";
import { useState, useEffect } from "react";

function GameBoard() {
  let pot = true ? 10 : 5 ;
  const [bet, setBet] = useState(1); // bet begins at $0; changes to $1 after 1st deal
  const [handStage, setHandStage] = useState(0); // false _0 = Deal ~ true _1 = Play 
  const style: { [className: string]: string }  = styles;
  
  /* changed playDeal() to this in order to track the stages of the hand which updates the PlayDeal button and the flipping of cards */
  console.log(handStage);
  function changeStage(): number {
    setHandStage(handStage + 1);
    if(handStage === 3) { // Resets game for another hand
      setHandStage(1);
      setBet(1);
    }
    return handStage;
  }
  
  function changeBet(state: boolean): void {
    if (!state && bet === 1) { // restricts minimum bet to $1
      setBet(1);
    } else if (!state) {
      setBet(bet - 1);
    } else if(bet === pot) { // prevents betting more than pot
      setBet(bet);
    } else {
      setBet(bet + 1);
    }
  }
  
  // to address hydration issue caused by calling newDeck (discrepency between card text on server and client side), the State and Effect hooks allow for the server and client sides to first render identical information (null in this case), and then after the client has hydrated, it allows the client to render fully ~ https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  if (!hydrated) {
    return null;
  }

  return (
    <section className={style.Gameboard}>
      <CardGutter card={newDeck} handStage={handStage} bet={bet} style={style} />
      <Pot pot={pot} />
      <ButtonPanel bet={bet} changeBet={changeBet} style={style} changeStage={changeStage} handStage={handStage} setBet={setBet} />
    </section>
  );
}

export default GameBoard;