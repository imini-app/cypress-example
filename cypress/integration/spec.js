// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />
import config from '../../test-config'

context('Cypress TodoMVC test', () => {
  beforeEach(() => {
    // The Base URL is set up in cypress.json file
    cy.visit('/')
  })

  // Use cypress.json to set up variables
  it('login', function () {
    // Set up the variable in the config file.
    // Couldn't get the native cypress config working...
    cy.get('#swimmer')
      .type(config.swimmer)
    cy.get('#password')
      .type(config.swimmer)
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
