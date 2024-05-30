"use client";
import styles from "./page.module.css";
import newDeck from "./Components/Deck/newDeck";
import GameBoard from "./Components/Board/GameBoard";

/* 
 ~ Component Hierarchy ~

 • GameBoard
  • CardGutter
    • Cards (Top / Middle / Bottom)
  • Pot
  • ButtonPanel
    • BetDisplay
    • Buttons
      • BetPanel
        • IncreaseBet
        • DecreaseBet
      • PlayDeal

 ~ State Determinants ~
  • Not state
    • Gameboard
    • CardGutter
    • Cards ???
    • DeckArray
    • ButtonPanel
    • BetPanel
  • State
    • BetDisplay
    • IncreaseBet
    • DecreastBet
    • PlayDeal
    • Middle Card

 ~ Order of Round ~
  1. Before Round Begins
    • Pot is initially set to $10
    • Bet Display is set to $0
    • All cards are set to visibilty hidden or back of card
    • Play/Deal button is set to Play
    • Player taps Play button to begin round
  2. Round Begins
    • Top (1) and Bottom (2) cards are dealt.
    • Pot increases by $1 (ante)
    • Play/Deal button is set to Deal
    • Player taps Increase/Decrease Arrows to set value in Bet Display
    • Player taps Deal to for Middle (3) card to be dealt
  3. Middle card is dealt
    • Win/Lose displays above Pot
      • Win: Pot decreases by Bet Display Amount
      • Lose: Pot increases by Bet Display Amount
    • Play/Deal button is set to Play
  4. Next Round Begins
    • Actions from Step 2 repeat
  
*/

export default function Home() { 
  
  console.log("newDeck");
  console.log(newDeck);
  console.log("newDeck first: " + newDeck[newDeck.length-3].value + " " + newDeck[newDeck.length-3].symbol + " " + newDeck[newDeck.length-3].label);
  console.log("newDeck 42nd: " + newDeck[newDeck.length-2].value + " "  + newDeck[newDeck.length-2].symbol + " " + newDeck[newDeck.length-2].label);
  console.log("newDeck last: " + newDeck[newDeck.length-1].value + " "  + newDeck[51].symbol + " " + newDeck[newDeck.length-1].label);
  console.log("newDeck length: " + newDeck.length);
  
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}
