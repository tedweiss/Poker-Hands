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
  // Value is a letter, switch to a number
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

// *** Poker Hands ***
const findHighCard = hand => {
  let highCard = { value: 0 }
  hand.forEach(card => {
    if (card.value > highCard.value) {
      highCard = card
    }
  })
  return highCard.name
}

const determineTwoPairs = hand => {
  let twoPairs = false
  let values = []
  let newHand = []
  let remainingCards = []
  // There is a pair
  if (determineNumberOfKind(hand, 2).match) {
    // Value of first pair
    values.push(determineNumberOfKind(hand, 2).value)
    // Remaining cards to be used to check for a second pair
    newHand = determineNumberOfKind(hand, 2).remaining
    // There is a second pair
    if (determineNumberOfKind(newHand, 2).match) {
      // Value of second pair
      values.push(determineNumberOfKind(newHand, 2).value)
      twoPairs = true
    }
    hand.map(card => {
      // Set the remaining card
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
  // Order the hand from least to greatest
  hand = hand.sort((a, b) => {
    return a.value - b.value
  })
  // Sets the value to be matched as most of a kind
  hand.map(card => {
    if (card.value === matchValueCheck) {
      matchValue = card.value
    }
    matchValueCheck = card.value
  })
  // Sort hand into matched or remaining arrays
  hand.map(card => {
    if (card.value === matchValue) {
      matchedCards.push(card)
    } else {
      remainingCards.push(card)
    }
    // Check that the number of matched kind has been reached
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

const determineStraight = hand => {
  let straight = true
  let orderedHand
  let startStraight
  let straightArray = []
  // Order the hand from least to greatest
  orderedHand = hand.sort((a, b) => {
    return a.value - b.value
  })
  // Create a straight array to compare the hand to
  startStraight = orderedHand[0].value
  for (var i = startStraight; i < startStraight + 5; i++) {
    straightArray.push(i)
  }
  // Compare hand and straight array
  orderedHand.map((card, idx) => {
    if (card.value !== straightArray[idx]) {
      straight = false
    }
  })
  return straight
}

const determineFlush = hand => {
  let flush = true
  let flushSuit
  // Sets a suit to be matched
  flushSuit = hand[0].suit
  // Checks that all cards are the same suit
  hand.map(card => {
    if (card.suit !== flushSuit) {
      flush = false
    }
  })
  return flush
}

const determineFullHouse = hand => {
  let fullHouse = false
  // Two pairs and no remaining cards
  if (determineTwoPairs(hand).twoPairs && determineTwoPairs(hand).remaining.length === 0) {
    fullHouse = true
  }
  return fullHouse
}

const determineStraightFlush = hand => {
  let straightFlush = false
  if (determineFlush(hand) && determineStraight(hand)) {
    straightFlush = true
  }
  return straightFlush
}

const determineRoyalFlush = hand => {
  let royalFlush = false
  if (determineStraightFlush(hand) && hand[0].value === 10) {
    royalFlush = true
  }
  return royalFlush
}
