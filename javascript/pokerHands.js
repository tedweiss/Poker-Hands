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
  let values = []
  let newHand = []
  let remainingCards = []
  if (determinePair(hand).pair) {
    values.push(determinePair(hand).value)
    newHand = determinePair(hand).remaining
    if (determinePair(newHand).pair) {
      values.push(determinePair(newHand).value)
      twoPairs = true
    }
    hand.map(card => {
      if (card.value !== values[0] && card.value !== values[1]) {
        remainingCards.push(card)
      }
    })
    return {
      twoPairs: twoPairs,
      values: values,
      remaining: remainingCards
    }
  }
}

const determineNumberOfKind = (hand, howManyToMatch) => {
  let match = false
  let matchValueCheck = 0
  let matchValue
  let matchedCards = []
  let remainingCards = []
  hand = hand.sort((a, b) => {
    return a.value - b.value
  })
  hand.map(card => {
    if (card.value === matchValueCheck) {
      matchValue = card.value
    }
    matchValueCheck = card.value
  })
  hand.map(card => {
    if (card.value === matchValue) {
      matchedCards.push(card)
    } else {
      remainingCards.push(card)
    }
    if (howManyToMatch === matchedCards.length) {
      match = true
    }
  })
  return {
    match: match,
    value: matchValue,
    remaining: remainingCards
  }
}
