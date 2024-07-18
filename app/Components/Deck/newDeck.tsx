import buildDeck from "./buildDeck";
import shuffle from "./shuffleDeck";

// 1. calls buildDeck() to create deck array
// 2. use slice() to create shallow copy of deck
// 3. use shuffle to reorder cards
let newDeck = () =>  shuffle(buildDeck().slice());

export default newDeck;