import { render, screen } from '@testing-library/react';
import { PageTitle } from './PageTitle';

describe('function PageTitle', () => {
  it('should return HTMLElement h1', () => {
    render(<PageTitle title="Home page" />);
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
  });
});
