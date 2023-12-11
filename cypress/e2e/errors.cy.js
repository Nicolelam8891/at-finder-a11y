describe('Bad route error', () => {
  it("Tests a bad route page for the team page", () => {
    cy.visit("http://localhost:3000/nonsense")
    cy.get('.error-bad-route-container').get('.error-bad-route-image').should("have.attr", "src").should("eq", "https://www.inclusionhub.com/hubfs/Blog/disabled-people-in-park-setting-1.jpg")
    cy.get('.error-bad-route-message').contains("h1", "ERROR")
    cy.get('.error-bad-route').contains("h3", "Oh no, you have gone down the wrong path. Find your path back home by clicking on the logo!")
  });
})