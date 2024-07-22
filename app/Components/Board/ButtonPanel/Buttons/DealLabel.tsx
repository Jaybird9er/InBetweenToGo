export default function DealLabel( props: any ) {
    let dealLabel: string = props.handStage % 2 === 0 || props.handStage === 3 ? "Deal" : "Play"; // game (and first hand) begins on Deal (false ~ 0) - hand resets on 3
    
    let deck = props.card;
    let hiLo = [deck[deck.length - 1].value, deck[deck.length - 2].value];
    let max = Math.max(...hiLo);
    let min = Math.min(...hiLo);
    
    // shorthand labels
    if (min + 1 === max) {
    dealLabel = "Bust";
    } else if (min === max) {
    dealLabel = "Double W!";
    }

    return (
    <>
    {dealLabel}
    </>
    )
}