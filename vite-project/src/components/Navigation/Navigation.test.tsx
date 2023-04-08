import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('render Navigation', () => {
    render(
      <>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Form')).toBeInTheDocument();
  });
});
