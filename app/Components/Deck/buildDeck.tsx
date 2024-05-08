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

  export default buildDeck;