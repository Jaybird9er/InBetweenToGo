// interface for each individual card
export interface Cards {
    value: number, 
    symbol: string,
    label: string, 
    color: string
}

// interface for individual deck
export interface Deck {
    card: Cards[];
}