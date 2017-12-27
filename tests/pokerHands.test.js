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
    expect(determinePair(pairHand).pair).toBe(true)
  })
  it('should state the value of the pair', function () {
    expect(determinePair(pairHand).value).toBe(7)
  })
  it('should return the remaining cards', function () {
    expect(determinePair(pairHand).remaining).toEqual([pairCard3, pairCard1, pairCard5])
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
})
