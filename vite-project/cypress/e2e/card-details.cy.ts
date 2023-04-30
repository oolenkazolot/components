describe('Card-details', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render card-details', () => {
    cy.get('.card__title').contains('Rick Sanchez').click();
    cy.get('.card-details__title').contains('Rick Sanchez');
    cy.get('.card-details__subtitle').contains('Status:');
    cy.get('.card-details__item').contains('Alive');
    cy.get('.card-details__item').contains('Species:');
    cy.get('.card-details__item').contains('Human');
    cy.get('.card-details__item').contains('Origin:');
    cy.get('.card-details__item').contains('Earth (C-137)');
    cy.get('.card-details__item').contains('Gender:');
    cy.get('.card-details__item').contains('Male');
    cy.get('.card-details__item').contains('Location:');
    cy.get('.card-details__item').contains('Citadel of Ricks');
  });
});
