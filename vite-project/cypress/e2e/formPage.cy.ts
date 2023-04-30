describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should display the correct page title', () => {
    cy.get('.page-title').should('have.text', 'Form');
  });
});
