import styles from "./page.module.css";

/* 
 ~ Component Hierarchy ~

 • GameBoard
  • CardGutter
    • Cards (Top / Middle / Bottom)
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

function GameBoard() {
  return (
    <section className={styles.Gameboard}>
      <CardGutter />
      <Pot />
      <ButtonPanel />
    </section>
  );
}

function CardGutter() {
  return (
    <section className={styles.Card_Gutter}>
      <Card />
      <Card />
      <Card />
    </section>
  );
}

function Card() {
  return (
    <div className={styles.Card}>
      ♠️
    </div>
  );
}

function Pot() {
  return (
    <div className={styles.Pot} >
      Pot
    </div>
  )
}



function ButtonPanel() {
  return (
    <section className={styles.Button_Panel}>
      <BetDisplay />
      <Buttons />
    </section>
  );
}

function BetDisplay() {
  return (
    <div className={styles.Bet_Display}>
      $
    </div>
  );
}

function Buttons() {
  return (
    <div className={styles.Buttons}>
      <BetPanel />
      <PlayDeal />
    </div>
  );
}

function BetPanel() {
  return (
    <div className={styles.Bet_Panel}>
      <IncreaseBet />
      <DecreaseBet />
    </div>
  );
}

function IncreaseBet() {
  return (
    <div className={styles.Increase_Bet}>
      +
    </div>
  );
}

function DecreaseBet() {
  return (
    <div className={styles.Decrease_Bet}>
      -
    </div>
  );
}

function PlayDeal() {
  return (
    <div className={styles.Play_Deal}>
      Play
    </div>
  );
}

const testDeck = [
  {value: 2, symbol: "♠️"},
  {value: 3, symbol: "♠️"},
  {value: 4, symbol: "♠️"},
  {value: 5, symbol: "♠️"},
  {value: 6, symbol: "♠️"},
  {value: 7, symbol: "♠️"},
];

testDeck.push({value: 8, symbol: "♠️"});

const deck = () => {
  const makeDeck = [];
  for (let i = 0; i < 4; i++) {
    let suit = "";
    let shade = "";
    if (i === 0) {
      suit = "♠️"
      shade = "black"
    } else if (i === 1) {
      suit = "♣️"
      shade = "black"
    } else if (i === 2) {
      suit = "♥️"
      shade = "red"
    } else if (i === 3) {
      suit = "♦️"
      shade = "red"
    }
    for (let i = 2; i < 15; i++) {
      if (i < 11) {
        makeDeck.push({rank: i, symbol: suit, value: i.toString(), color: shade})
      } else if (i === 11) {
        makeDeck.push({rank: i, symbol: suit, value: "J", color: shade})
      } else if (i === 12){
        makeDeck.push({rank: i, symbol: suit, value: "Q", color: shade})
      } else if (i === 13){
        makeDeck.push({rank: i, symbol: suit, value: "K", color: shade})
      } else {
        makeDeck.push({rank: i, symbol: suit, value: "A", color: shade})
      }
    }
  }
  
  return makeDeck;
}


export default function Home() {

  console.log(testDeck[0].value + " : " + testDeck[0].symbol); 
  console.log(testDeck[1].value + " : " + testDeck[1].symbol); 
  console.log(testDeck[1]); 
  console.log(testDeck[6]); 
  console.log(testDeck[5]); 
  console.log(testDeck.length); 
  console.log(deck()); 
  console.log(deck().length); 
  console.log(deck()[Math.floor(Math.random() * 51)]); 
  
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}
