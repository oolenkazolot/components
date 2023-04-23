import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('HomePage', () => {
  it('render HomePage', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
  });
});
