import { validateHeaderName } from "http";
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
      <CardGutter card={nextDeck} />
      <Pot />
      <ButtonPanel />
    </section>
  );
}
interface Cards {
  value: number, 
  symbol: string,
  label: string, 
  color: string
}

interface Deck {
  card: Cards[];
}

function CardGutter(props: Deck) {
  let cards = props.card;
  let card1 = {
    value: 0,
    symbol: "",
    label: "",
    color: ""
  };
  let card2 = {
    value: 0,
    symbol: "",
    label: "",
    color: ""
  };
  let card3 = {
    value: 0,
    symbol: "",
    label: "",
    color: ""
  };

  for(let i = 1; i <= 3; i++) {
    if (i === 3) {
      card1 = cards[cards.length - i];
    } else if ( i === 2) {
      card2 = cards[cards.length - i]
    } else {
      card3 = cards[cards.length - i]
    }
  }
  return (
    <section className={styles.Card_Gutter}>
      <Card key={1} value={card1.value} symbol={card1.symbol} label={card1.label} color={card1.color} />
      <div className={styles.Middle_Card}>
        <Card key={3} value={card3.value} symbol={card3.symbol} label={card3.label} color={card3.color} />
      </div>
      <Card key={2} value={card2.value} symbol={card2.symbol} label={card2.label} color={card2.color} />
    </section>
  );
}


function Card(props: Cards) {
  let value = props.value;
  let symbol = props.symbol;
  let label = props.label;
  let color = props.color;

  return (
    <div className={styles.Card}>
      <span style={{ color: color }}>{label}</span>
      &nbsp;:&nbsp;
      <span style={{ color: color }}>{symbol}</span>
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


const buildDeck = () => {
  const makeDeck = [];
  const suitsArr = ["♠️", "♥️", "♣️", "♦️"];
  const labelsArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  let suit = "";
  let shade = "";
  
  // The first loop sets the suit and color
  for (let i = 0; i < 4; i++) {
    suit = suitsArr[i];
    shade = i % 2 === 0 ? "black" : "red";
    
    // The 2nd loop sets the values and labels, and then pushes each object to makeDeck
    for (let n = 2; n < 15; n++) {
      makeDeck.push({value: n, symbol: suit, label: labelsArr[n - 2], color: shade})
    }
  }
  
  return makeDeck;
}

function shuffle(deckArr: any[]) {
  let currentDeck = deckArr.length;
  // While there remain elements to shuffle...
  while (currentDeck != 0) {

    // Pick a remaining element...
    let shuffleDeck = Math.floor(Math.random() * currentDeck);
    currentDeck--;

    // And swap it with the current element.
    [deckArr[currentDeck], deckArr[shuffleDeck]] = [deckArr[shuffleDeck], deckArr[currentDeck]];

  }
  return deckArr;
}

let nextDeck = buildDeck().slice();
// can pop
nextDeck.pop()
nextDeck.pop()
nextDeck.pop()
nextDeck.pop()
nextDeck.pop()
nextDeck.pop()


nextDeck.pop()
nextDeck.pop()
nextDeck.pop()
// Can reset nextDeck
// nextDeck = buildDeck().slice();
nextDeck = shuffle(nextDeck);


export default function Home() {

  const aDeck = buildDeck().slice();
 
  // console.log(buildDeck()); 
  // console.log(buildDeck().length); 
  // console.log(buildDeck()[Math.floor(Math.random() * 51)]); 
  // console.log(shuffle(buildDeck())); 
  // // console.log("newdeck" + newDeck(buildDeck()).length);
  console.log("nextDeck_0: " + nextDeck[33].symbol + "  " + nextDeck[33].label);
  console.log(buildDeck()[51]);
  console.log(nextDeck[45]);
  console.log(buildDeck().length);
  console.log(nextDeck.length);
  console.log(nextDeck);
  // console.log("aDeck");
  // console.log(aDeck);
  
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}
