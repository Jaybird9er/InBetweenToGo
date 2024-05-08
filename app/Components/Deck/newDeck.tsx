import buildDeck from "./buildDeck";
import shuffle from "./shuffleDeck";

// 1. calls buildDeck() to create deck array
// 2. use slice() to create shallow copy of deck
let newDeck = buildDeck().slice();

// 3. use shuffle to reorder cards
newDeck = shuffle(newDeck);

// newDeck.pop();

export default newDeck;