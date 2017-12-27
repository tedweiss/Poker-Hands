const makeCardDeck = () => {
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
const Card = card => {
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
const findHighCard = hand => {
  let highCard = { value: 0 }
  hand.forEach(card => {
    if (card.value > highCard.value) {
      highCard = card
    }
  })
  return highCard.name
}

const determinePair = hand => {
  let pair = false
  let pairValueCheck = 0
  let pairValue
  let remainingCards = []
  hand = hand.sort((a, b) => {
    return a.value - b.value
  })
  hand.map(card => {
    if (card.value === pairValueCheck) {
      pair = true
      pairValue = card.value
    }
    pairValueCheck = card.value
  })
  hand.map(card => {
    if (card.value !== pairValue) {
      remainingCards.push(card)
    }
  })
  return {
    pair: pair,
    value: pairValue,
    remaining: remainingCards
  }
}

const determineTwoPairs = hand => {
  let twoPairs = false
  let newHand = []
  if (determinePair(hand).pair) {
    newHand = determinePair(hand).remaining
    if (determinePair(newHand).pair) {
      twoPairs = true
    }
  }
  return {
    twoPairs: twoPairs
  }
}
