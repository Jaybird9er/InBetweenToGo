import styles from "./page.module.css";

/* 
 ~ Component Hierarchy ~

 • GameBoard
  • CardDisplay
    • Cards (Top / Middle / Bottom)
  • ButtonPanel
    • Buttons
    • BetView

*/

function GameBoard () {
  return (
    <div className={styles.gameboard}>
      Test
    </div>
  );
}


export default function Home() {
  return (
    <main>
      <GameBoard />
    </main>
  );
}
