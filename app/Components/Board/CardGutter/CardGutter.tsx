import styles from "../../../page.module.css"
import Card from "./Card";
import { Deck } from "@/app/interface";

// interfaces required for applying type to props
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

  export default CardGutter;