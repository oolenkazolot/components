import { render, screen } from '@testing-library/react';
import { Head } from './Head';

describe('Head', () => {
  it('render Head', () => {
    render(<Head />);
    expect(screen.getAllByAltText('head-img'));
  });
});
