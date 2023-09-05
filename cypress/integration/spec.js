// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Cypress TodoMVC test', () => {
  beforeEach(() => {
    // The Base URL is set up in cypress.json file
    cy.visit('/')
  })

  // Use cypress.json to set up variables
  it('login', function () {
    const swimmer = Cypress.env('swimmer')
    cy.get('#swimmer')
      .type(swimmer)
    cy.get('#password')
      .type(swimmer)
    cy.get('.MuiDialogActions-root button').click()

    cy.get('h1').should('be.visible')
    cy.get('h1').should('contain', 'Swim Times')
    // make sure cypress-axe is working
    cy.injectAxe()
  })

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
})
