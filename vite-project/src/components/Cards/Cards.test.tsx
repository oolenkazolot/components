import { render, screen } from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';
import { beforeEach, describe, it, vi } from 'vitest';
import { ICard } from '../../models';
import { Cards } from './Cards';
const fetchMocker = createFetchMock(vi);
const cards: ICard[] = [
  {
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
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
];

fetchMocker.enableMocks();
describe('testing api', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('displays data cards', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: cards }));
    render(<Cards search="" />);
    await screen.findByText('Rick Sanchez');
    await screen.findByText('Morty Smith');
  });

  it('displays data cards', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: null }));
    render(<Cards search="" />);
    await screen.findByText('Error, data not received');
  });

  it('shows an error on incorrect request', async () => {
    fetchMock.mockReject(new Error('Error, data not received'));
    render(<Cards search="" />);
    await screen.findByText('Error, data not received');
  });
});

fetchMocker.dontMock();
