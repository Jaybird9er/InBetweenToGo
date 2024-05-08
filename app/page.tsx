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

*/

export default function Home() { 
  
  console.log("newDeck");
  console.log(newDeck);
  console.log("newDeck first: " + newDeck[0].value + " " + newDeck[0].symbol + " " + newDeck[0].label);
  console.log("newDeck 42nd: " + newDeck[9].value + " "  + newDeck[9].symbol + " " + newDeck[9].label);
  console.log("newDeck last: " + newDeck[newDeck.length-1].value + " "  + newDeck[50].symbol + " " + newDeck[newDeck.length-1].label);
  console.log("newDeck length: " + newDeck.length);
  
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}
