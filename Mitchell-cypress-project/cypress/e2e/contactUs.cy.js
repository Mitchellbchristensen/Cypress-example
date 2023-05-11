/// <reference types="cypress" />
describe('Contact Us', () => {
  it('Contact Us Request', () => {
    cy.visit('/')
    cy.get('input[id="name"]').type('Mitchell Christensen')
    cy.get('input[id="email"]').type('mitchellbchristensen@gmail.com')
    cy.get('#query-type').select(1).invoke("val").should('eq', 'General')
    cy.get('#dob').type('2009-12-12')
    cy.get('[data-testid="practice-checkbox"]').click();
    cy.get('[data-testid="submit-button"]').click();
    cy.get('.success-message').should('be.visible')
  })
})