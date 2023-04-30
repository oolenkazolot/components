describe('Card', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render card', () => {
    cy.get('.card__title').contains('Rick Sanchez');
    cy.get('.card__img').should('have.attr', 'alt', 'product-img');
  });
});
