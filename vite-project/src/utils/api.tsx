import { IProduct } from '../models';

interface IGetProducts {
  setProducts: (data: IProduct[]) => void;
  setError: (error: Error | null) => void;
  setLoaded: (value: boolean) => void;
  search: string;
}

export const getProducts = async ({
  setProducts,
  setError,
  setLoaded,
  search,
}: IGetProducts): Promise<void> => {
  const path: string = search
    ? `https://rickandmortyapi.com/api/character?name=${search}`
    : `https://rickandmortyapi.com/api/character`;

  try {
    const response = await fetch(path);
    const result = await response.json();
    if (result.results) {
      setError(null);
      setProducts(result.results);
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
