describe('Not found page', () => {
  beforeEach(() => {
    cy.visit('*');
  });
  it('should display the correct title', () => {
    cy.get('.page-title').should('have.text', 'Not Found Page');
  });

  it('should display the correct text', () => {
    cy.get('.not-found-page__title').contains("This page doesn't exist. Go");
  });

  it('should display a link to the home page', () => {
    cy.get('a').contains('Home Page').should('have.attr', 'href', '/');
  });

  it('redirects to the home page on link click', () => {
    cy.visit('/invalid-path');
    cy.get('.not-found-page__title a')
      .click()
      .url()
      .should('eq', Cypress.config().baseUrl + '/');
  });
});
