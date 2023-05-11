/// <reference types="cypress" />
import 'cypress-axe'

describe('Axe accessibility scan', () => {
    before(() => {
      cy.visit('/')
      cy.injectAxe()
    });

    it('Scan the main page', () => {
        cy.checkA11y();
    });
  })