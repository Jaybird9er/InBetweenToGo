import styles from "../../page.module.css";
import CardGutter from "./CardGutter/CardGutter";
import Pot from "./Pot";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import newDeck from "../Deck/newDeck";
import { useState, useEffect } from "react";

function GameBoard() {
  let pot = true ? 10 : 5 ;
  const [bet, setBet] = useState(0); // bet begins at $0; changes to $1 after 1st deal
  const [deal, setDeal] = useState(false); // false = Play ~ true = Deal
  const style: { [className: string]: string }  = styles;
  
  function playDeal(): void {
    if(!deal && bet === 0) {  // initiate start of game
      setDeal(true);
      setBet(bet + 1); // set to $1 as minimum bet must be $1
    }
    if(deal) {
      setDeal(false); // sets to Play
    } else {
      setDeal(true); // sets to Deal
    }
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
  
  // to address hydration issue caused by the calling newDeck (discrepency between card text on server and client side), the State and Effect hooks allow for the server and client sides to first render identical information (null in this case), and then after the client has hydrated, it allows the client to render fully ~ https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  if (!hydrated) {
    return null;
  }

  return (
    <section className={style.Gameboard}>
      <CardGutter card={newDeck} deal={deal} bet={bet} style={style} />
      <Pot pot={pot} />
      <ButtonPanel bet={bet} changeBet={changeBet} style={style} playDeal={playDeal} deal={deal} />
    </section>
  );
}

export default GameBoard;