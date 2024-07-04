import Card from "./Card";
import { Deck } from "@/app/interface";

// interfaces required for applying type to props
function CardGutter(props: any) {
    // deal={deal} bet={bet} 
    const style: { [className: string]: string } = props.style;
    
    /* 
    How to set top, middle, and bottom cards:
    
        1. Play/Deal button is set to Play and all cards are face down
        2. Hit Play button, it changes to deal, and top and bottom cards are face up

    */


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
        <section className={style.Card_Gutter}>
        <Card key={1} value={card1.value} symbol={card1.symbol} label={card1.label} color={card1.color} {...props} />
        <div className={style.Middle_Card}>
            <Card key={3} value={card3.value} symbol={card3.symbol} label={card3.label} color={card3.color} {...props} />
        </div>
        <Card key={2} value={card2.value} symbol={card2.symbol} label={card2.label} color={card2.color} {...props} />
        </section>
    );
}

  export default CardGutter;