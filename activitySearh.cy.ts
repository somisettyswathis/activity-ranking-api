// <reference types="cypress" />

//---------Included data-cy- attributes------------------------
//considering the default localhost autocomplete in Cypress
//writing the code with data-cy-ids by assuming data-cy-ids are added for all the components in the applications. If not we need to add while implementing the automation code which helps us to find the targeted selectors only for testing
describe('activity Ranking', () => {

    beforeEach(function () {

        //run the login test before each test case--------
        cy.visit('http://localhost:3000/');
        // @ts-ignore
        cy.get('[data-cy-id="search-input"]').as('btnSearch').click();
    });

    if('Enter a valid city and sees activity rankings', () => {

        cy.get('@btnSearch').type('@cityName')
        cy.wait('@searchinterceptor').then( ()=>{});
        cy.get('[data-cy-id="search-autocomplete-suggestion"]').should('be.visible').contains('@cityName').first().click();
        cy.wait('@activitresultinterceptor').then((interception) => {
            expect(interception.response?.statusCode).to.eq(200);
        });
        cy.get('[data-cy-id="activity-result"]').should('have.length.at.least',1)
          .each(($e1) =>
        {
            cy.wrap($e1).within(() => {
                cy.get('[data-cy-id="activity-date"]').contains(/\d{2}-\d{2}-\d{4}/); // Date
                cy.get('[data-cy-id="activity-name"]').contains(/Activity/i); // name
                cy.get('[data-cy-id="activity-ranking"]').contains(/Rank:\s*[1-9]|10/); //ranking
                cy.get('[data-cy-id="activity-reasoning"]').contains(/Reasoning/i); //reasoning
            });
        });
    });

    if('Enter a text with no matching suggestions' , () => {

        cy.get('@btnSearch').type('@invalidCity')
        cy.get('[data-cy-id="search-autocomplete-suggestion"]').should('not.exist');
        cy.get('[data-cy-id="error-message"]').should('be.visible').contains('No Cities Found');
    });

    if('Enter an invalid characters as input' , () => {

        cy.get('@btnSearch').type('@invalidChars')
        cy.get('[data-cy-id="search-autocomplete-suggestion"]').should('not.exist');
        cy.get('[data-cy-id="error-message"]').should('be.visible').contains('Invalid City, Please enter a valid city');
    });

    if('Enter a valid input but API is down' , () => {
        cy.get('@btnSearch').type('@cityName')
        cy.get('[data-cy-id="search-autocomplete-suggestion"]').should('be.visible').contains('@cityName').first().click();
        cy.wait('@apidown');
        cy.get('[data-cy-id="error-message"]').should('be.visible').contains('Unable to fetch the data. Please try again');
    });
