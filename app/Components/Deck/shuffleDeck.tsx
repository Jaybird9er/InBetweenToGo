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

  export default shuffle;