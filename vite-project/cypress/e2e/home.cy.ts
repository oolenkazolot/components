describe('Home page', () => {
  it('should display the correct search title', () => {
    cy.visit('/');

    cy.get('.search__title').should('have.text', 'Search Characters');
  });
});
