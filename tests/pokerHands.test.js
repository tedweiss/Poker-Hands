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
    expect(determinePair(pairHand)).toBe(true)
  })
})
