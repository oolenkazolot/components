import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../Input/Input';
import { IInput } from '../../models';

const props: IInput = {
  content: 'Name:',
  refInput: React.createRef(),
  attributes: {
    type: 'text',
    name: 'name',
    placeholder: 'Enter Name...',
  },
  isError: true,
  errorMessage: 'Name is invalid (example: Oliver Peters)',
};

describe('Input', () => {
  it('render Input Component', () => {
    render(<Input {...props} />);
    const inputText: HTMLInputElement = screen.getByLabelText(props.content || '');
    expect(inputText).toHaveAttribute('name', props.attributes.name);
    expect(inputText).toHaveAttribute('type', props.attributes.type);
    expect(
      screen.getByPlaceholderText(props.attributes.placeholder.toString())
    ).toBeInTheDocument();
    expect(screen.getByText(props.errorMessage)).toBeInTheDocument();
  });
});
