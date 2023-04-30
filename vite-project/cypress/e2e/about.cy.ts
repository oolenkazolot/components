describe('About page', () => {
  beforeEach(() => {
    cy.visit('/About');
  });
  it('should display the correct page title', () => {
    cy.get('.page-title').should('have.text', 'About us');
  });
});
