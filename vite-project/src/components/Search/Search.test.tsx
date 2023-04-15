import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '../Search/Search';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Search', () => {
  it('render Search component', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search text...')).toBeInTheDocument();
    expect(screen.getByDisplayValue(localStorage.getItem('searchValue') || '')).toBeInTheDocument();
  });
});

describe('Search', () => {
  it('render Search component', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByDisplayValue(localStorage.getItem('searchValue') || '')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    expect(screen.getByDisplayValue(/React/i)).toBeInTheDocument();
  });
});
