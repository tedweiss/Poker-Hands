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
})
