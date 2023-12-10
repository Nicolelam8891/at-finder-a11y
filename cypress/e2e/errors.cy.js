describe('template spec', () => {
  it("Tests a bad route page for the team page", () => {
    cy.visit("http://localhost:3000/nonsense");
    cy.get('.error-bad-route-container').get('.error-bad-route-image').should("have.attr", "src").should("eq", "https://www.ucdenver.edu/images/librariesprovider38/default-album/people-w-disabilities-sized.jpg?sfvrsn=c3a5c3ba_0")
    cy.get('.error-bad-route-message').contains("h1", "ERROR")
    cy.get('.error-bad-route').contains("h3", "Oh no, you have gone down the wrong path. Find your path back home by clicking on the home button!" )
    cy.get('.header').get('.logo').click().url().should("eq", "http://localhost:3000/")
  });
})