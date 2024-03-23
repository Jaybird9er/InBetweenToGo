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
      Test
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


export default function Home() {
  return (
    <main className={styles.main}>
      <GameBoard />
    </main>
  );
}
