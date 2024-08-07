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
    1. Before the first hand of the round begins - (Stage 0)
      • Pot is initially set to $10
      • Bet Display is set to $0
      • All cards are set to back of card (visibilty hidden)
      • Play/Deal button is set to Play
        • Increase/Decrease buttons are inactive
      • Player taps Deal button to begin
    2. Hand begins - (Stage 1)
      • Top (1) and Bottom (2) cards are dealt.
      • Pot increases by $1 (ante)
      • Play/Deal button is set to Play
      • Increase/Decrease buttons are active
      • BetDisplay is set to $1
      • Player taps Increase/Decrease Arrows to set value in Bet Display
      • Player taps Play for Middle (3) card to be dealt
    3. Middle card is dealt - (Stage 2)
      • Win/Lose displays above Pot
        • Win: Pot decreases by Bet Display Amount
        • Lose: Pot increases by Bet Display Amount
      • Play/Deal button is set to Play
    4. Next hand begins - (Stage 3)
      • Some actions from Step 1 repeat
        • bet remains at $1

  ~ Winning & Losing Hands (Stage 2) ~
  • Win/Lost state is determined
    • The winLoss() function evaluates whether the Middle card (3) is between the Top (1) and Bottom (2) cards.
      • While winLoss() evaluates, In/Decrease Arrows are set to inactive.
      • Winning
        • After 500ms, Pot decreases by given amount
      • Losing
        • After 500ms, Bet Display is set to $0
        • After 1000ms, Pot increases by given amount
        

  ~ Chip/Cash Flow ~
    1. Before player hits Deal Button for the first time (Stage 0)
      • Bet Display is set to $0.
      • Bankroll is set intiail sum ($20).
      • Pot is initially set to $10.
    2. Player hits Deal Button (Stage 1)
      • Player's Bankroll decrease by $1 (ante).
      • Pot increases by $1 for each player (ante).
    3. Player hits Deal Button (Stage 2)
      • Bet Display increases by $1 (minimum bet).
      • Player's Bankroll decrease by $1 (minimum bet).
      • Player may increase (or decrease) bet using In/Decrease Arrows
        • Each In/Decrease results in Bet Display increasing and decreasing with matching increases and decreases in player's Bankroll
    4. Player hits Play Button (Stage 3).
      • After short delay (500ms), Chips/Cash flow in the following ways:
        • Win: 
          • Pot and Bet Display simultaneously decrease in increments of $1 until Bet hits 0 at a speed of 500ms.
          • At the same time, the player's Bankroll adds $1 in increments of $1 until Bet hits 0 at a speed of 250ms ($2 / 500ms).
        • Lose: 
          • The player's Bankroll and Bet Display simultaneously decrease in increments of $1 until Bet hits 0 at a speed of 500ms.
          • At the same time, the Pot adds $1 in increments of $1 until Bet hits 0 at a speed of 250ms ($2 / 500ms).
            *** each element (Pot, Bet Display, Bankroll) will need to be made into components to allow them to be redrawn on each change ***
    5. Game determines next player (Stage 4)
      • If additional players need to complete their turn, game moves to next player and Stage 2.
      • After every player has completed a hand, the first player starts a new hand and the game goes back to Stage 1.
        • In Party Mode, the next player starts the new round.


*/