describe('Homepage user flow', () => {
  beforeEach(() => {
    cy.intercept(
      "POST", 
      "https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql", (req) => {
        if (req.body && req.body.operationName === 'SessionCreate') {
          req.reply((res) => {
           res.send({
             fixture: 'users.json', 
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
    cy.get('.login-button').contains("Log In").click()
    cy.get('#email').should("have.attr", "placeholder", "email").type("rosa@aol.com").should("have.value", "rosa@aol.com")
    cy.get('#password').should("have.attr", "placeholder", "password").type("rosaslaw10!").should("have.value", "rosaslaw10!")
    cy.get('form > button').contains("Login")
  })

  it('it should allow user to go to the About page', () => {
    cy.get('.about-button').contains("About").click()
    cy.get('.h2-ms').get('h2').contains("h2", "Mission Statement")
    cy.get('.p-ms').contains("p", "Provide an AI-driven application")
    cy.get('.contributor-card-container > :nth-child(2)').first().get(':nth-child(1) > .contributor-image').should("have.attr", "src").and('match', /nicole\.\w+\.png$/)
    cy.get(':nth-child(1) > h3').contains("h3", "Nicole Lam")
    cy.get('.contributor-card-container > :nth-child(1) > :nth-child(3)').contains("p", "Front End Software Developer")
    cy.get(':nth-child(1) > :nth-child(4)').contains("p", "Nicole is a software engineer")
    cy.get('.contributor-card-container > :nth-child(6)').last().get(':nth-child(6) > .contributor-image').should("have.attr", "src").and('match', /eliza\.\w+\.png$/)
    cy.get(':nth-child(6) > h3').contains("h3", "Eliza Keating")
    cy.get(':nth-child(6) > :nth-child(3)').contains("p", "Back End Software Developer")
    cy.get(':nth-child(6) > :nth-child(4)').contains("p", "Eliza is a software developer from Denver, CO.")
  })

  it('it should allow user to go to the Find my AT page', () => {
        cy.get('.find-AT-button').contains("Find my AT").click()
        cy.get('.form-head').contains("h1", "Choose a Disability Category")
        cy.get('.category-list > :nth-child(1)').first().get(':nth-child(1) > .cat-title').contains("h2", "Blindness")
        cy.get(':nth-child(1) > .img').should("have.attr", "src").and('match', /Blindness\.\w+\.png$/)
        cy.get(':nth-child(1) > .def-cont > .cat-def').contains("p", "A person is functionally blind if they are unable to use vision in certain environments or for certain tasks, even with correction.")
        cy.get('.category-list > :nth-child(9)').last().get(':nth-child(9) > .cat-title').contains("h2", "Communication Supports")
        cy.get(':nth-child(9) > .img').should("have.attr", "src").and('match', /Communication\.\w+\.png$/)
        cy.get(':nth-child(9) > .def-cont > .cat-def').contains("p", "Communication disabilities affect receiving, sending, processing, and understanding concepts through verbal, nonverbal, & graphic symbol systems.")
        cy.get('.category-list > :nth-child(1)').first().get(':nth-child(1) > .cat-title').contains("h2", "Blindness").click()
        cy.get('.sub').contains("h2", "What is your area of need?")
        cy.get('.subcategory-list > :nth-child(1)').contains("p" , "Screen Readers")
        cy.get('.subcategory-list > :nth-child(2)').contains("p", "Refreshable Braille Displays")
    });

  it('it should allow user to go to the Learn more about AT page', () => {
    cy.get('.learn-AT-button').contains("Learn more about AT").click();
    cy.get('.App > :nth-child(2) > :nth-child(1)').contains("h2", "Assistive Technology")
    cy.get('.App > :nth-child(2) > :nth-child(2)').contains("p", "In the United States, it is legally required that assistive technology")
    cy.get('.App > :nth-child(2) > :nth-child(3)').contains("h2", "Examples of Assistive Technologies")
    cy.get(':nth-child(2) > :nth-child(4)').contains("p", "The following lists provide a small sample of types of assistive technologies. Some Assistive Technologies")
    cy.get(':nth-child(2) > :nth-child(5)').contains("h3", "Blind and Low Vision")
    cy.get(':nth-child(2) > :nth-child(6)').contains("Screen Readers")
    cy.get(':nth-child(2) > :nth-child(7)').contains("h3", "Supports for Reading Disabilities")
    cy.get(':nth-child(8) > :nth-child(1)').contains("Text-to-Speech Tools")
    cy.get(':nth-child(2) > :nth-child(9)').contains("h3", "Supports for Writing and Spelling Disabilities")
    cy.get(':nth-child(10) > :nth-child(1)').contains("Word Prediction Software")
    cy.get(':nth-child(2) > :nth-child(11)').contains("h3", "Supports for Physical Disabilities")
    cy.get(':nth-child(12) > :nth-child(1)').contains("Alternative Keyboards")
    cy.get(':nth-child(2) > :nth-child(13)').contains("h2", "Assistive Technology and Accessible Educational Materials Resources")
    cy.get('a[href="https://aem.cast.org/get-started/resources/2021/aem-navigator"]')
    .should('have.attr', 'href', 'https://aem.cast.org/get-started/resources/2021/aem-navigator');

})
})



