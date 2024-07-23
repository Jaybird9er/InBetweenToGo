import styles from "../../page.module.css";
import CardGutter from "./CardGutter/CardGutter";
import Pot from "./Pot";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import newDeck from "../Deck/newDeck";
import { useState, useEffect } from "react";
import enums from "@/app/enums";
import { Cards } from "@/app/interface";

function GameBoard() {
  const [pot, setPot] = useState(10);
  const [bankroll, setBankroll] = useState(20);
  const [bet, setBet] = useState(0); // bet begins at $0; changes to $1 after 1st deal
  const [handStage, setHandStage] = useState(0); // false _0 = Deal ~ true _1 = Play 
  const [deck, setDeck] = useState<Cards[]>(newDeck); // initialized to newDeck with the Cards interface
  const style: { [className: string]: string }  = styles; // type used to describe CSS forms
  
  /* changed playDeal() to this in order to track the stages of the hand which updates the PlayDeal button and the flipping of cards */
  // console.log(deck[deck.length - 1].label + " : " + deck[deck.length - 1].symbol);
  
  function changeStage(): void {
    console.log(handStage);
    setHandStage(handStage => handStage + 1);
    
    // required for instances when only 2 cards are dealt
    let hiLo = [deck[deck.length - 1].value, deck[deck.length - 2].value];
    let max = Math.max(...hiLo);
    let min = Math.min(...hiLo);
    let middleCard = deck[deck.length - 3];
    function twoCardDeal(): void {
      if (deck.length > 4) {
        // console.log("Card 1: " + deck[deck.length - 1].label + " : " + deck[deck.length - 1].symbol);
        // console.log("Card 2: " + deck[deck.length - 2].label + " : " + deck[deck.length - 2].symbol);
        // console.log("Splice: " + deck.length);
        deck.splice(deck.length - 2, 2);
      } else {
        setDeck([]);
        setDeck(newDeck);
        deck.push(middleCard);
      }
      setHandStage(0);
    }

    // console.log("Card 3: " + deck[deck.length - 3].label + " : " + deck[deck.length - 3].symbol);
    // console.log("Card 3: " + useLastCard.label + " : " + useLastCard.symbol);

    // shorthand: bottom card + 1 === top card – ex. 2:♠️ & 3:♥️
    if (handStage === 1 && min + 1 === max) {
      twoCardDeal();
    
    // shorthand: bottom card === top card
    } else if (handStage === 1 && min === max) {
      twoCardDeal();

    } else if (handStage === 3) { // resets game for another hand
      setHandStage(1);
      setBet(1);
      
      // draws next three cards
      let x = 0;
      while (x < 3) {
        deck.pop()
        x++;
      }
      
    }
    // console.log(deck.length);
    // refresh the deck
    if(deck.length < 3) {
      setDeck([]);
      setDeck(newDeck);
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

  function changeBankroll(state: boolean): void {

  }

  function changePot(state: boolean): void {
    
  }
  
  function winLose(): void {     
    let hiLo = [deck[deck.length - 1].value, deck[deck.length - 2].value]; // 1st and 2nd cards dealt
    let max = Math.max(...hiLo);
    let min = Math.min(...hiLo);
    let middleCard = deck[deck.length - 3].value;

    // console.log("Card 1: " + deck[deck.length - 1].value + " : " + deck[deck.length - 1].symbol);
    // console.log("Card 2: " + deck[deck.length - 2].value + " : " + deck[deck.length - 2].symbol);
    // console.log("Card 3*: " + deck[deck.length - 3].value + " : " + deck[deck.length - 3].symbol);
    
    if (min + 1 === max) {
      // setTimeout(() => {console.log("Lose and Next")} , enums.delay * 2);
      setTimeout(() => setPot(pot => pot + bet), enums.delay * 3);
      setTimeout(() => setBankroll(bankroll => bankroll - bet), enums.delay);
      setTimeout(() => setBet(0), enums.delay);
    } else if (min === max) {
      // setTimeout(() => {console.log("2x Win")} , enums.delay * 2);
      setTimeout(() => setPot(pot => pot - 2), enums.delay * 3);
      setTimeout(() => setBankroll(bankroll => bankroll + 2), enums.delay);
      setTimeout(() => setBet(0), enums.delay);
    } else if (max > middleCard && middleCard > min) {
      // setTimeout(() => {console.log("Win")} , enums.delay);
      setTimeout(() => setPot(pot => pot - bet), enums.delay * 2);
      setTimeout(() => setBankroll(bankroll => bankroll + bet), enums.delay * 3);
      setTimeout(() => setBet(0), enums.delay);
    } else {
      // setTimeout(() => {console.log("Lose")} , enums.delay * 2);
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
      <CardGutter card={deck} handStage={handStage} style={style} />
      <Pot pot={pot} />
      <ButtonPanel bet={bet} changeBet={changeBet} style={style} changeStage={changeStage} handStage={handStage} setBet={setBet} winLose={winLose} enums={enums} bankroll={bankroll} card={deck} />
    </section>
  );
}

export default GameBoard;