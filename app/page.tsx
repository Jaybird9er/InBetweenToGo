import styles from "./page.module.css";

/* 
 ~ Component Hierarchy ~

 • GameBoard
  • CardGutter
    • Cards (Top / Middle / Bottom)
  • ButtonPanel
    • Buttons
    • BetView

*/

function GameBoard() {
  return (
    <div className={styles.Gameboard}>
      <CardGutter />
    </div>
  );
}

function CardGutter() {
  return (
    <div className={styles.Card_Gutter}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className={styles.Card}>
      Test
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
