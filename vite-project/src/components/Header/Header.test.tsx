import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  it('renders the title "Home" based on the current location', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders the title "About" based on the current location', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the title "Form" based on the current location', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Form Page')).toBeInTheDocument();
  });

  it('renders the navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the title "Not Found Page" based on the current location', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-route']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Not Found Page')).toBeInTheDocument();
  });
});
