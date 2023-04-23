import { render, screen } from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';
import { beforeEach, describe, it, vi } from 'vitest';
import { ICard } from '../../models';
import { Cards } from './Cards';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { cardApi } from '../../redux/services/card';
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
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    await screen.findByText('Rick Sanchez');
    await screen.findByText('Morty Smith');
  });

  it('displays data cards', async () => {
    fetchMock.mockResponse(JSON.stringify({ results: null }));
    store.dispatch(cardApi.util.resetApiState());
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    await screen.findByText('Error, data not received');
  });

  it('shows an error on incorrect request', async () => {
    fetchMock.mockReject(new Error('Error, data not received'));
    store.dispatch(cardApi.util.resetApiState());
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    await screen.findByText('Error, data not received');
  });
});

fetchMocker.dontMock();
