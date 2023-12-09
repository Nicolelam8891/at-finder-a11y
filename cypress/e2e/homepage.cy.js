describe('Homepage user flow', () => {
  beforeEach(() => {
    cy.intercept
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})