describe('Tests AI technology paths', () => {
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
          cy.get('.active-filter').contains('h1', "A.I. Suggested Tech")
          cy.get('.results-headings > :nth-child(2)').contains('h1', "Community Comments" )
          cy.get(':nth-child(1) > .Tech-card').get(':nth-child(1) > .Tech-card > h3').contains('h3', 'JAWS')
          cy.get(':nth-child(1) > .Tech-card > a').contains('a', "More Info")
          cy.get(':nth-child(1) > .Tech-card > p').contains('p', "Hello I am a screen reader")
          cy.get(':nth-child(1) > .Tech-card > button').contains("Comment")
          cy.get('.results-headings > :nth-child(2)').click();
          cy.get('.Tech-list > :nth-child(1)').first().get('.Tech-list > :nth-child(1) > :nth-child(2)').contains('p', 'User 1 1')
          cy.get(':nth-child(1) > .containerText > :nth-child(3)').contains("p", "one one")
          cy.get('.Tech-list > :nth-child(8)').last().get(':nth-child(8) > :nth-child(2)').contains('p', "this is my title")
          cy.get(':nth-child(8) > .containerText > :nth-child(3)').contains("p", "this is my comment")
          cy.get('.results-headings > :nth-child(1)').click();
          cy.get(':nth-child(1) > .Tech-card > button').click();
          cy.get('input.hardcoded').should('have.value', 'JAWS');
          cy.get('textarea[name="comment"]').type("this is my comment").should('have.value', 'this is my comment');
          cy.get('.rating-btns').contains('button', 'I like it').click();
          cy.get('.rating-btns').contains('button', "I don't like it").click();
          cy.get('[type="submit"]').click();
          cy.get('.close-button').click();
          cy.get('.results-headings > :nth-child(2)').click();
          cy.get('.Tech-list > :nth-child(1)').first().get('.Tech-list > :nth-child(1) > :nth-child(2)').contains('p', 'User 1 1')
          cy.get(':nth-child(2) > .containerText > :nth-child(3)')
          cy.get('.Tech-list > :nth-child(8)').last().get(':nth-child(8) > :nth-child(2)').contains('p', "this is my title")
        })
  });
   

