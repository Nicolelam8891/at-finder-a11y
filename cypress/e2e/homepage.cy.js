describe('Homepage user flow', () => {
  beforeEach(() => {
     // Intercept POST requests to the GraphQL endpoint
    cy.intercept(
      "POST", 
      "https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql", (req) => {
        if (req.body && req.body.operationName === 'SessionCreate') {
          req.reply((res) => {
           res.send({
             fixture: 'users.json', // Provide a fixture file with the desired response
             statusCode: 200,
           });
          })
        }
      }
    ).as("users")
    cy.visit('http://localhost:3000/')
  })
  it('it should contain a header, h1, log-in button, about button, two informational blocks, and buttons for additiona information', () => {
    cy.get('.header').get('.logo').click().url().should("eq", "http://localhost:3000/")
    cy.get('h1').contains("h1", "AI AT Ally")
    cy.get('.login-button').contains("Log In")
    cy.get('.about-button').contains("About")
    cy.get('.info-container').contains("h2", "Welcome to AI AT Ally")
    cy.get('.info-container > p').contains('p', "If you need to research assistive")
    cy.get('.find-AT-button').contains("Find my AT")
    cy.get('.learn-AT-button').contains("Learn more about AT")
    cy.get('.AT-info').get('.what-is-at').contains("h2", "What is assistive technology")
    cy.get('div.info-description > :nth-child(1)').contains("p", "Assistive Technology is anything a person")
    cy.get('div.info-description > :nth-child(2)').contains("p", "Assistive technology helps people")
  })
  
  it('it should allow user to log in', () => {
    // cy.get('.login-button').contains("Log In").click()
    // cy.get('#email').should("have.attr", "placeholder", "email").type("rosa@aol.com").should("have.value", "rosa@aol.com")
    // cy.get('form > button').contains("Login").click()
    // cy.get('.login-error-message').should("contain", "Form is incomplete. All fields need to be filled in.")

    cy.get('.login-button').contains("Log In").click()
    cy.get('#email').should("have.attr", "placeholder", "email").type("rosa@aol.com").should("have.value", "rosa@aol.com")
    cy.get('#password').should("have.attr", "placeholder", "password").type("rosaslaw10!").should("have.value", "rosaslaw10!")
    cy.get('form > button').contains("Login")
  })

  it('it should allow user to go to the About page', () => {
    cy.get('.about-button').contains("About").click()
    cy.get('.mission-statement-container').get('h2').contains("h2", "Mission Statement")
    cy.get('.mission-statement').contains("p", "Provide an AI-driven application")
    cy.get('.contributor-card-container > :nth-child(2)').first().get(':nth-child(2) > .contributor-image').should("have.attr", "src").and('match', /nicole\.\w+\.png$/)
    cy.get(':nth-child(2) > h3').contains("h3", "Nicole Lam")
    cy.get('.contributor-card-container > :nth-child(2) > :nth-child(3)').contains("p", "Front End Software Developer")
    cy.get(':nth-child(2) > :nth-child(4)').contains("p", "Nicole is a software engineer")
    cy.get('.contributor-card-container > :nth-child(7)').last().get(':nth-child(7) > .contributor-image').should("have.attr", "src").and('match', /eliza\.\w+\.png$/)
    cy.get(':nth-child(7) > h3').contains("h3", "Eliza Keating")
    cy.get(':nth-child(7) > :nth-child(3)').contains("p", "Back End Software Developer")
    cy.get(':nth-child(7) > :nth-child(4)').contains("p", "Eliza is a software developer from Denver, CO.")
  })

  it('it should allow user to go to the Find my AT page', () => {
      cy.intercept('POST', 'https://assistivie-tech-2307-648a3d563927.herokuapp.com/', {
        statusCode: 201,
        fixture: 'aiTechResults',
      })
        .as('getAiTech')
        .visit('http://localhost:3000/');
        cy.get('.find-AT-button').contains("Find my AT").click();
    });
})




