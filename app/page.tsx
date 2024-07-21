"use client";
import styles from "./page.module.css";
import GameBoard from "./Components/Board/GameBoard";

export default function Home() { 
  
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}

/* 
 ~ Component Hierarchy ~
  • GameBoard
    • CardGutter
      • Cards (Top / Middle / Bottom) 
  • Pot
    • ButtonPanel
      -> BetDisplay - integrated
      • BetPanel
        • BetButtons -> IncreaseBet & DecreaseBet
      -> PlayDeal

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

 ~ Order of Hand ~
  1. Before the first hand begins - (Stage 0)
    • Pot is initially set to $10
    • Bet Display is set to $0
    • All cards are set to visibilty hidden or back of card
    • Play/Deal button is set to Play
      • Increase/Decrease buttons are inactive
    • Player taps Play button to begin
  2. Hand begins - (Stage 1)
    • Top (1) and Bottom (2) cards are dealt.
    • Pot increases by $1 (ante)
    • Play/Deal button is set to Deal
    • Increase/Decrease buttons are active
    • BetDisplay is set to $1
    • Player taps Increase/Decrease Arrows to set value in Bet Display
    • Player taps Deal for Middle (3) card to be dealt
  3. Middle card is dealt - (Stage 2)
    • Win/Lose displays above Pot
      • Win: Pot decreases by Bet Display Amount
      • Lose: Pot increases by Bet Display Amount
    • Play/Deal button is set to Play
  4. Next hand begins - (Stage 3)
    • Some actions from Step 1 repeat
      • bet remains at $1

~ Winning & Losing Bets (Stage 2) ~
• Win/Lost state is determined
  • The winLoss() function evaluates whether the Middle card (3) is between the Top (1) and Bottom (2) cards.
    • While winLoss() evaluates, In/Decrease Arrows are set to inactive.
    • Winning
      • After 500ms, Pot decreases by given amount
    • Losing
      • After 500ms, Bet Display is set to $0
      • After 1000ms, Pot increases by given amount
      
*/