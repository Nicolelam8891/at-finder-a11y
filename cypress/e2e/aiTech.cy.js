describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests', {
      statusCode: 201,
      fixture: 'aiTechResults'
    })
      .as('getAiTech')

      cy.intercept('POST', 'https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql', (req) => {
    req.reply({
      statusCode: 201,
      fixture: 'getAllComments, createComment' 
    });
  }).as('graphqlRequest');
      cy.visit('http://localhost:3000/findmyat');
    });
   
    
      it('should allow the user to get details about assistive technologies ', () => {
    
          cy.get('.category-list > :nth-child(1)').click();
          cy.get('.subcategory-list > :nth-child(1)').contains("Screen Readers").click();
          cy.get('.submit').contains("Submit").click()
          cy.wait('@getAiTech');
          cy.wait('@graphqlRequest');
        })
  });
   

