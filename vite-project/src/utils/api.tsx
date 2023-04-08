import { ICard } from '../models';

interface IGetCards {
  setCards: (data: ICard[]) => void;
  setError: (error: Error | null) => void;
  setLoaded: (value: boolean) => void;
  search: string;
}

interface IGetCard {
  id: number;
  setCard: (data: ICard) => void;
  setError: (error: null | Error) => void;
  setLoaded: (value: boolean) => void;
}

export const getCards = async ({
  setCards,
  setError,
  setLoaded,
  search,
}: IGetCards): Promise<void> => {
  const path: string = search
    ? `https://rickandmortyapi.com/api/character?name=${search}`
    : `https://rickandmortyapi.com/api/character`;

  try {
    const response = await fetch(path);
    const result = await response.json();

    if (result.results) {
      setError(null);
      setCards(result.results);
    } else {
      throw new Error('Error, data not received');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error);
    }
  } finally {
    setLoaded(true);
  }
};

export const getCard = async ({ id, setCard, setError, setLoaded }: IGetCard): Promise<void> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await response.json();

    if (result) {
      setError(null);
      setCard(result);
    } else {
      throw new Error('Error, data not received');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error);
    }
  } finally {
    setLoaded(true);
  }
};
