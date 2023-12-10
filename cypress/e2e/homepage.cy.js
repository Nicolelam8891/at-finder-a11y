describe('Homepage user flow', () => {
  beforeEach(() => {
    cy.intercept(
      "POST", 
      "https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql"
      {
        statusCode: 200,
        fixture: "users",
      }
    ).as("users")
    cy.visit('http://localhost:3000')
  })
  it('passes', () => {
  })
})