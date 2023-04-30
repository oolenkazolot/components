describe('CardForm', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should successfully submit the form with all required fields filled and the card should be displayed', () => {
    const inputText = 'Alex Smit';
    const inputDate = '1989-01-01';
    const selectValue = 'Poland';
    const inputRadioOne = 'I want to receive notifications about promo, sales, etc.';
    const fileName = 'test.png';
    const mimeType = 'image/png';

    cy.fixture(fileName, 'base64').then((fileContent) => {
      const blob = Cypress.Blob.base64StringToBlob(fileContent, mimeType);
      const filePath = `cypress/fixtures/${fileName}`;
      cy.writeFile(filePath, blob, 'binary');

      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName,
        mimeType,
      });
    });

    cy.get('input[name="inputText"]').type(inputText);
    cy.get('input[name="inputDate"]').type(inputDate);
    cy.get('select[name="select"]').select(selectValue);
    cy.get('input[name="inputCheckbox"]').check();
    cy.get('input[type="radio"]').first().check();
    cy.get('.form__btn button').should('not.be.disabled');
    cy.get('form').submit();
    cy.get('.message').should('have.text', 'Personal data saved');
    cy.get('.form__cards .card-form').should('have.length', 1);
    cy.get('.form__cards .card-form__name').should('have.text', inputText);
    cy.get('.card-form__info-item').contains(inputDate);
    cy.get('.card-form__info-item').contains(selectValue);
    cy.get('.card-form__info-item').contains(inputRadioOne);
    cy.get('.form__cards .card-form__picture .card-form__picture-item')
      .should('have.attr', 'src')
      .and('match', /^blob:http:\/\/localhost:3000\/[a-f0-9\-]+$/);
  });
});
