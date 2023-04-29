describe('Search component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should change search value when user types in input', () => {
    const newSearchValue = 'New search value';

    cy.get('.search__input').type(newSearchValue).should('have.value', newSearchValue);
  });

  // it('should dispatch action on form submit', () => {
  //   const newSearchValue = 'New search value';

  //   cy.get('.search__input').type(newSearchValue);

  //   cy.get('.search__form').submit();

  //   cy.window()
  //     .its('store')
  //     .invoke('getState')
  //     .its('reducer.search.search')
  //     .should('eq', newSearchValue);
  // });
});
