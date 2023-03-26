import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '../Search/Search';

describe('Search', () => {
  it('render Search component', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search text...')).toBeInTheDocument();
    expect(screen.getByDisplayValue(localStorage.getItem('searchValue') || '')).toBeInTheDocument();
  });
});

describe('Search', () => {
  it('render Search component', () => {
    render(<Search />);
    expect(screen.getByDisplayValue(localStorage.getItem('searchValue') || '')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    expect(screen.getByDisplayValue(/React/i)).toBeInTheDocument();
  });
});
