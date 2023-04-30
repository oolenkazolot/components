describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the correct page title', () => {
    cy.get('.page-title').should('have.text', 'Home page');
  });

  it('should display the correct search title', () => {
    cy.get('.search__title').should('have.text', 'Search Characters');
  });

  it('should change search value when user types in input', () => {
    const newSearchValue = 'New search value';
    cy.get('.search__input').type(newSearchValue).should('have.value', newSearchValue);
  });
});
