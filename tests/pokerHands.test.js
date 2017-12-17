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
})
