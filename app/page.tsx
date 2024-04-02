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
      <CardGutter nextDeck={nextDeck} />
      <Pot />
      <ButtonPanel />
    </section>
  );
}
interface DeckProps {
  value: number, 
  symbol: string, 
  label: string, 
  color: string
}

function CardGutter({ nextDeck }: any) {
  return (
    <section className={styles.Card_Gutter}>
      <Card nextDeck={nextDeck[nextDeck.length - 3]}/>
      <Card nextDeck={nextDeck[nextDeck.length - 1]}/>
      <Card nextDeck={nextDeck[nextDeck.length - 2]}/>
    </section>
  );
}


function Card({ nextDeck }: any) {
  return (
    <div className={styles.Card}>
      <span style={{color: nextDeck.color}}>{nextDeck.label}</span>
      &nbsp;:&nbsp;
      <span style={{color: nextDeck.color}}>{nextDeck.symbol}</span>
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
// Can reset nextDeck
// nextDeck = buildDeck().slice();
nextDeck = shuffle(nextDeck);


export default function Home() {

  console.log(testDeck[0].value + " : " + testDeck[0].symbol); 
  console.log(testDeck[1].value + " : " + testDeck[1].symbol); 
  console.log(testDeck[1]); 
  console.log(testDeck[6]); 
  console.log(testDeck[5]); 
  console.log(testDeck.length); 
  console.log(buildDeck()); 
  console.log(buildDeck().length); 
  console.log(buildDeck()[Math.floor(Math.random() * 51)]); 
  console.log(shuffle(buildDeck())); 
  // console.log("newdeck" + newDeck(buildDeck()).length);
  console.log("nextDeck_0: " + nextDeck[33].symbol + "  " + nextDeck[33].label);
  console.log(buildDeck()[51]);
  console.log(nextDeck[48]);
  console.log(buildDeck().length);
  console.log(nextDeck.length);
  console.log(nextDeck);
  
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}
