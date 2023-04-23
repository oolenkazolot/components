import { render, screen } from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';
import { CardDetails } from './CardDetails';
import { beforeEach, describe, it, vi } from 'vitest';
import { ICard } from '../../models';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { cardApi } from '../../redux/services/card';
const fetchMocker = createFetchMock(vi);

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

fetchMocker.enableMocks();
describe('testing api', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('display detailed data card', async () => {
    fetchMock.mockResponse(JSON.stringify(card));
    store.dispatch(cardApi.util.resetApiState());
    render(
      <Provider store={store}>
        <CardDetails id={1} />
      </Provider>
    );
    await screen.findByText('Rick Sanchez');
  });

  it('should show error message, if not received data from api', async () => {
    fetchMock.mockResponse(JSON.stringify(null));
    store.dispatch(cardApi.util.resetApiState());
    render(
      <Provider store={store}>
        <CardDetails id={1} />
      </Provider>
    );
    await screen.findByText('Error, data not received');
  });

  it('should show error message, if an error was returned during the request to the api', async () => {
    fetchMock.mockReject(new Error('Error, data not received'));
    store.dispatch(cardApi.util.resetApiState());
    render(
      <Provider store={store}>
        <CardDetails id={1} />
      </Provider>
    );
    await screen.findByText('Error, data not received');
  });
});

fetchMocker.dontMock();
