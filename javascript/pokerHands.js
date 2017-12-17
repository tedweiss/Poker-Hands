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
Card = card => {
  let cardArray = card.split('')
  let suit = cardArray[1]
  let value = parseInt(cardArray[0])
  if (isNaN(value)) {
    if (cardArray[0] === 'Q') {
      value = 12
    } else {
      value = 10
    }
  }
  return {
    suit: suit,
    value: value
  }
}
