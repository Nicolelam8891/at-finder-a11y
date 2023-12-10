describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://assistivie-tech-2307-648a3d563927.herokuapp.com/', {
      statusCode: 201,
      fixture: 'aiTechResults',
    })
      .as('getAiTech')
      .visit('http://localhost:3000/');
  })
  it('it should allow user to go to the Find my AT page', () => {
   
  });
})