import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form } from './Form';

describe('Form', () => {
  it('should render the basic fields', () => {
    render(<Form />);
    expect(screen.getByText(/User Info/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First and last names:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Birthday:/i)).toBeInTheDocument();
    expect(screen.getByText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I agree with my personal data/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/I want to receive notifications about promo, sales, etc./i)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/I don’t want to receive notifications about promo, sales, etc./i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Upload a profile picture/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('should must be an 6 errors, the fields are required', async () => {
    render(<Form />);
    const button: HTMLButtonElement = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    const count: number = (await screen.findAllByText('Field is required')).length;
    expect(count).toEqual(6);
  });

  it('save form data data if validation is successful', async () => {
    render(<Form />);
    URL.createObjectURL = function (obj) {
      return '';
    };
    const inputText: HTMLInputElement = screen.getByRole('textbox', {
      name: 'First and last names:',
    });
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
    const file: File = new File(['hello'], 'hello.png', { type: 'image/png' });
    const fileInput: HTMLInputElement = screen.getByLabelText('Upload a profile picture');
    await userEvent.upload(fileInput, file);
    const button: HTMLButtonElement = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText(/Personal data saved/i);
  });

  it('should show error message be shown if the name field contains numbers', async () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', {
      name: 'First and last names:',
    });
    fireEvent.change(inputText, { target: { value: '11111' } });
    const button: HTMLButtonElement = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText(
      'Enter the first and last name, with a capital letter (example: Alex Smit)'
    );
  });

  it('should show error message be shown if the name does not start with a capital letter', async () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', {
      name: 'First and last names:',
    });
    fireEvent.change(inputText, { target: { value: 'oliver Peters' } });
    const button: HTMLButtonElement = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText(
      'Enter the first and last name, with a capital letter (example: Alex Smit)'
    );
  });

  it('should show error message be shown if the surname does not start with a capital letter', async () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByRole('textbox', {
      name: 'First and last names:',
    });
    fireEvent.change(inputText, { target: { value: 'Oliver peters' } });
    const button: HTMLButtonElement = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText(
      'Enter the first and last name, with a capital letter (example: Alex Smit)'
    );
  });

  it('the form must be cleared after the form is submitted', async () => {
    render(<Form />);
    const inputText: HTMLInputElement = screen.getByLabelText('First and last names:');
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
    fireEvent.click(inputRadio);
    const file: File = new File(['hello'], 'hello.png', { type: 'image/png' });
    const fileInput: HTMLInputElement = screen.getByLabelText('Upload a profile picture');
    await userEvent.upload(fileInput, file);
    const button: HTMLButtonElement = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);

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
