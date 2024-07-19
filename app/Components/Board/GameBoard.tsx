import styles from "../../page.module.css";
import CardGutter from "./CardGutter/CardGutter";
import Pot from "./Pot";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import newDeck from "../Deck/newDeck";
import { useState, useEffect } from "react";
import enums from "@/app/enums";
import { Cards } from "@/app/interface";
import { countReset } from "console";

function GameBoard() {
  const [pot, setPot] = useState(10);
  const [bankroll, setBankroll] = useState(20);
  const [bet, setBet] = useState(1); // bet begins at $0; changes to $1 after 1st deal
  const [handStage, setHandStage] = useState(0); // false _0 = Deal ~ true _1 = Play 
  const [deck, setDeck] = useState<Cards[]>(newDeck); // initialized to newDeck with the Cards interface
  const style: { [className: string]: string }  = styles; // type used to describe CSS forms
  
  /* changed playDeal() to this in order to track the stages of the hand which updates the PlayDeal button and the flipping of cards */
  console.log(handStage);
  // console.log(deck[deck.length - 1].label + " : " + deck[deck.length - 1].symbol);

  function changeStage(): void {
    setHandStage(handStage => handStage + 1);
    if(handStage === 3) { // resets game for another hand
      setHandStage(1);
      setBet(1);
      
      // draws next three cards ~ will need to change for instances where Top card === Bottom card
      let x = 0;
      while (x < 3) {
        deck.pop()
        x++;
      }
      
      // refresh the deck
      console.log(deck.length);
      if(deck.length < 3) {
        setDeck([]);
        setDeck(newDeck);
      }
    }
  }
  
  function changeBet(state: boolean): void {
    if (!state && bet === 1) { // restricts minimum bet to $1
      setBet(1);
    } else if (!state) {
      setBet(bet - 1);
    } else if(bet === pot || bet === bankroll) { // prevents betting more than pot or bankroll
      setBet(bet);
    } else {
      setBet(bet + 1);
    }
  }
  
  function winLose(): void {     
    let hiLo = [deck[deck.length - 3].value, deck[deck.length - 2].value];
    let max = Math.max(...hiLo);
    let min = Math.min(...hiLo);
    let middleCard = deck[deck.length - 1].value;

    setInterval(() => {
      while (bet > 0){
        setBet(bet - 1)
      }
    }, 1000);
    
    if (max > middleCard && middleCard > min) {
      setTimeout(() => {console.log("Win")} , enums.delay);
      setTimeout(() => setPot(pot => pot + bet), enums.delay * 2);
      setTimeout(() => setBankroll(bankroll => bankroll + bet), enums.delay * 3);
      setTimeout(() => setBet(0), enums.delay);
    } else {
      setTimeout(() => {console.log("Lose")} , enums.delay * 2);
      setTimeout(() => setPot(pot => pot + bet), enums.delay * 3);
      setTimeout(() => setBankroll(bankroll => bankroll - bet), enums.delay);
      setTimeout(() => setBet(0), enums.delay);
    }
  }

  // to address hydration issue caused by calling deck (discrepency between card text on server and client side), the State and Effect hooks allow for the server and client sides to first render identical information (null in this case), and then after the client has hydrated, it allows the client to render fully ~ https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  if (!hydrated) {
    return null;
  }

  return (
    <section className={style.Gameboard}>
      <CardGutter card={deck} handStage={handStage} bet={bet} style={style} />
      <Pot pot={pot} />
      <ButtonPanel bet={bet} changeBet={changeBet} style={style} changeStage={changeStage} handStage={handStage} setBet={setBet} winLose={winLose} enums={enums} bankroll={bankroll} />
    </section>
  );
}

export default GameBoard;