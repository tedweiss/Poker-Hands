describe('Handling cards', function () {
  it('should make a deck of cards', function () {
    expect(makeCardDeck()[0]).toBe('2C')
  })
  it("should tell a card's suit", function () {
    expect(Card('2C').suit).toBe('C')
  })
  it("should tell a card's value", function () {
    expect(Card('2C').value).toBe(2)
  })
  it("should tell a 10 card's value", function () {
    expect(Card('TC').value).toBe(10)
  })
  it("should tell a Queen card's value", function () {
    expect(Card('QC').value).toBe(12)
  })
  it("should find any card's face value", function () {
    expect(Card('KC').value).toBe(13)
  })
})

describe('Different Poker hands', function () {
  it('should find the high card', function () {
    let card1 = Card('2C')
    let card2 = Card('3H')
    let card3 = Card('5H')
    let card4 = Card('TS')
    let card5 = Card('KD')
    let hand = [card1, card2, card3, card4, card5]
    expect(findHighCard(hand)).toBe('KD')
  })

  // Pair Hand tests
  // Sample hand for Pair Hand
  let pairCard1 = Card('TS')
  let pairCard2 = Card('7H')
  let pairCard3 = Card('3D')
  let pairCard4 = Card('7S')
  let pairCard5 = Card('JC')
  let pairHand = [pairCard1, pairCard2, pairCard3, pairCard4, pairCard5]

  it('should determine if the hand has a pair', function () {
    expect(determineNumberOfKind(pairHand, 2).match).toBe(true)
  })
  it('should state the value of the pair', function () {
    expect(determineNumberOfKind(pairHand, 2).value).toBe(7)
  })
  it('should return the remaining cards', function () {
    expect(determineNumberOfKind(pairHand, 2).remaining).toEqual([pairCard3, pairCard1, pairCard5])
  })

  // 2 Pairs Hand tests
  // Sample hand for 2 Pairs Hand
  let twoPairsCard1 = Card('KS')
  let twoPairsCard2 = Card('3H')
  let twoPairsCard3 = Card('3D')
  let twoPairsCard4 = Card('JC')
  let twoPairsCard5 = Card('KC')
  let twoPairsHand = [twoPairsCard1, twoPairsCard2, twoPairsCard3, twoPairsCard4, twoPairsCard5]

  it('should determine if the hand has 2 pairs', function () {
    expect(determineTwoPairs(twoPairsHand).twoPairs).toBe(true)
  })
  it('should state the values of the 2 pairs', function () {
    expect(determineTwoPairs(twoPairsHand).values).toEqual([13, 3])
  })
  it('should return the remaining card from the 2 pairs', function () {
    expect(determineTwoPairs(twoPairsHand).remaining).toEqual([twoPairsCard4])
  })

  // Three of a Kind Hand tests
  // Sample hand for Three of a Kind Hand
  let threeKindCard1 = Card('QS')
  let threeKindCard2 = Card('QH')
  let threeKindCard3 = Card('3D')
  let threeKindCard4 = Card('QC')
  let threeKindCard5 = Card('JC')
  let threeKindHand = [threeKindCard1, threeKindCard2, threeKindCard3, threeKindCard4, threeKindCard5]

  it('should determine if the hand has three of a kind', function () {
    expect(determineNumberOfKind(threeKindHand, 3).match).toBe(true)
  })
  it('should state the value of the three of a kind', function () {
    expect(determineNumberOfKind(threeKindHand, 3).value).toBe(12)
  })
  it('should return the remaining cards of the three of a kind', function () {
    expect(determineNumberOfKind(threeKindHand, 3).remaining).toEqual([threeKindCard3, threeKindCard5])
  })

  // Straight Hand tests
  // Sample hand for a Straight
  it('should determine if the hand is a straight', function () {
    let straightCard1 = Card('2C')
    let straightCard2 = Card('3H')
    let straightCard3 = Card('5H')
    let straightCard4 = Card('6S')
    let straightCard5 = Card('4D')
    let straightHand = [straightCard1, straightCard2, straightCard3, straightCard4, straightCard5]
    expect(determineStraight(straightHand)).toBe(true)
  })

  // Flush Hand tests
  // Sample hand for a Flush
  it('should determine if the hand is a flush', function () {
    let flushCard1 = Card('JD')
    let flushCard2 = Card('3D')
    let flushCard3 = Card('KD')
    let flushCard4 = Card('6D')
    let flushCard5 = Card('AD')
    let flushHand = [flushCard1, flushCard2, flushCard3, flushCard4, flushCard5]
    expect(determineFlush(flushHand)).toBe(true)
  })
  // Three of a Kind Hand tests
  // Sample hand for Three of a Kind Hand
  let fullHouseCard1 = Card('7S')
  let fullHouseCard2 = Card('7H')
  let fullHouseCard3 = Card('TD')
  let fullHouseCard4 = Card('7C')
  let fullHouseCard5 = Card('TC')
  let fullHouseHand = [fullHouseCard1, fullHouseCard2, fullHouseCard3, fullHouseCard4, fullHouseCard5]

  it('should determine if the hand is a full house', function () {
    expect(determineFullHouse(fullHouseHand)).toBe(true)
  })

  // Four of a Kind Hand tests
  // Sample hand for Four of a Kind Hand
  let fourKindCard1 = Card('4S')
  let fourKindCard2 = Card('4H')
  let fourKindCard3 = Card('4D')
  let fourKindCard4 = Card('4C')
  let fourKindCard5 = Card('8C')
  let fourKindHand = [fourKindCard1, fourKindCard2, fourKindCard3, fourKindCard4, fourKindCard5]

  it('should determine if the hand has four of a kind', function () {
    expect(determineNumberOfKind(fourKindHand, 4).match).toBe(true)
  })
  it('should state the value of the four of a kind', function () {
    expect(determineNumberOfKind(fourKindHand, 4).value).toBe(4)
  })
})
