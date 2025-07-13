// <reference types="cypress" />
Cypress.Commands.add('interceptUrls',fn()=> {
    cy.intercept('GET','**/searchSuggestions**').as('searchinterceptor')
    cy.intercept('GET','**/activityResult**').as('activityresultinterceptor');
    cy.intercept('GET', '**/api-endpoint/**', {forceNetworkError: true}).as('apidown');
})