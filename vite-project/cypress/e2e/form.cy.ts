describe('Form', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('render form', () => {
    cy.get('.form__title').should('have.text', 'User Info');
    cy.get('.input-block__label').contains('First and last names:');
    cy.get('.input-block__label').contains('Birthday:');
    cy.get('.select-block__label').contains('Country:');
    cy.get('.checkbox-block__label').contains('I agree with my personal data');
    cy.get('.radio-group__btn').contains(
      'I want to receive notifications about promo, sales, etc.'
    );
    cy.get('.radio-group__btn').contains(
      'I don’t want to receive notifications about promo, sales, etc.'
    );
    cy.get('.input-block__label').contains('Upload a profile picture');
    cy.get('.btn').should('have.text', 'Submit');
  });
});
