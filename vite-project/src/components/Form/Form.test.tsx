import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('render error messages when submitting an empty form', () => {
    render(<Form />);
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    screen.getByText('Name is invalid (example: Oliver Peters)');
    screen.getByText('Date is invalid (date must not be greater than today"s date)');
    screen.getByText('Specify country');
    screen.getByText('Confirm the accuracy of personal data');
    screen.getByText(
      'Specify whether you want to receive notifications about promotions, sales, etc.'
    );
    screen.getByText('Profile picture not selected');
  });

  it('save form data data if validation is successful', () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(inputText, { target: { value: 'Oliver Peters' } });
    expect(inputText.value).toBe('Oliver Peters');
    const inputDate: HTMLInputElement = screen.getByLabelText('Birthday:');
    fireEvent.change(inputDate, { target: { value: '1989-07-31' } });
    expect(inputDate.value).toBe('1989-07-31');
    const select: HTMLSelectElement = screen.getByRole('combobox', { name: 'Country:' });
    fireEvent.change(select, { target: { value: 'Poland' } });
    expect(select.value).toBe('Poland');
    const inputCheckbox: HTMLInputElement = screen.getByRole('checkbox', {
      name: 'I agree with my personal data',
    });
    fireEvent.click(inputCheckbox);
    expect(inputCheckbox.checked).toEqual(true);
    const inputRadio: HTMLInputElement = screen.getByRole('radio', {
      name: 'I want to receive notifications about promo, sales, etc.',
    });
    fireEvent.click(inputRadio);
    expect(inputRadio).toBeChecked();
    const inputFile: HTMLInputElement = screen.getByLabelText('Upload a profile picture');
    fireEvent.change(inputFile, {
      target: {
        files: [
          new File([' '], 'C:\fakepathTo reach the goal, you must first of all go. (1).png', {
            type: 'image/png',
          }),
        ],
      },
    });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    expect(screen.findByText('Personal data saved'));
  });

  it('should show error message be shown if the name field contains numbers', () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(inputText, { target: { value: '11111' } });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    screen.getByText('Name is invalid (example: Oliver Peters)');
  });

  it('should show error message be shown if the name does not start with a capital letter', () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(inputText, { target: { value: 'oliver Peters' } });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    screen.getByText('Name is invalid (example: Oliver Peters)');
  });

  it('should show error message be shown if the surname does not start with a capital letter', () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', { name: 'Name:' });
    fireEvent.change(inputText, { target: { value: 'Oliver peters' } });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    screen.getByText('Name is invalid (example: Oliver Peters)');
  });

  it('should show error message be shown if numbers are entered in the birthday field', () => {
    render(<Form />);
    const inputDate: HTMLInputElement = screen.getByLabelText('Birthday:');
    fireEvent.change(inputDate, { target: { value: 'ff19-ff-31' } });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    screen.getByText('Date is invalid (date must not be greater than today"s date)');
  });

  it('should show error message be shown if the date is greater than the current date', () => {
    render(<Form />);
    const inputDate: HTMLInputElement = screen.getByLabelText('Birthday:');
    fireEvent.change(inputDate, { target: { value: '26.03.2024' } });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);
    screen.getByText('Date is invalid (date must not be greater than today"s date)');
  });

  it('the form must be cleared after the form is submitted', () => {
    render(<Form />);

    const inputText: HTMLInputElement = screen.getByLabelText('Name:');
    fireEvent.change(inputText, { target: { value: 'Oliver Peters' } });
    const inputDate: HTMLInputElement = screen.getByLabelText('Birthday:');
    fireEvent.change(inputDate, { target: { value: '1989-07-31' } });
    const select: HTMLSelectElement = screen.getByRole('combobox', { name: 'Country:' });
    fireEvent.change(select, { target: { value: 'Poland' } });
    const inputCheckbox: HTMLInputElement = screen.getByRole('checkbox', {
      name: 'I agree with my personal data',
    });
    fireEvent.click(inputCheckbox);
    const inputRadio: HTMLInputElement = screen.getByRole('radio', {
      name: 'I want to receive notifications about promo, sales, etc.',
    });
    fireEvent.click(inputRadio);
    const inputFile: HTMLInputElement = screen.getByLabelText('Upload a profile picture');
    fireEvent.change(inputFile, {
      target: {
        files: [
          new File([' '], 'C:\fakepathTo reach the goal, you must first of all go. (1).png', {
            type: 'image/png',
          }),
        ],
      },
    });
    const btnSubmit = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(btnSubmit);

    setTimeout(() => {
      expect(inputText).toHaveValue('');
      expect(inputDate).toHaveValue('');
      expect(select).toHaveValue('');
      expect(inputCheckbox).toHaveChecked(false);
      expect(inputRadio).toHaveChecked(false);
      expect(inputFile).toHaveValue('');
    }, 1000);
  });
});
