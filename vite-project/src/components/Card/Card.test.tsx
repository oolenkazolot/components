import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { ICard } from '../../models';

const card: ICard = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('Card', () => {
  it('render Card', () => {
    render(<Card {...card} />);
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getAllByAltText('product-img'));
  });
});
