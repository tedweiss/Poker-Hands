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
    let faceValues = {
      T: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14
    }
    value = faceValues[cardArray[0]]
  }
  return {
    name: card,
    suit: suit,
    value: value
  }
}

// Poker Hands
findHighCard = hand => {
  let highCard = {value: 0}
  hand.forEach(card => {
    if (card.value > highCard.value) {
      highCard = card
    }
  })
  return highCard.name
}
