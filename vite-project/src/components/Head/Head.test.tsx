import { render, screen } from '@testing-library/react';
import { Head } from './Head';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Head', () => {
  it('render Head', () => {
    render(<Head />);
    expect(screen.getAllByAltText('head-img'));
  });
});
