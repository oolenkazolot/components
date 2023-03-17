import { render, screen } from '@testing-library/react';
import { Search } from '../Search/Search';

describe('Search', () => {
  it('render Search component', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search text...')).toBeInTheDocument();
    expect(screen.getByDisplayValue(localStorage.getItem('searchValue') || '')).toBeInTheDocument();
  });
});
