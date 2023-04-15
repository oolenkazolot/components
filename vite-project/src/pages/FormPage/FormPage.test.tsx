import { render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('FormPage', () => {
  it('render FormPage', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Form');
  });
});
