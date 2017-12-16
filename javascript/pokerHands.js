makeCardDeck = () => {
  let deck = []
  let suits = ['C', 'D', 'H', 'S']
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push(value + suit)
    })
  })
  return deck
}
