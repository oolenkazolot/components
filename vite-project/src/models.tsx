export interface IHeader {
  title: string;
}

export interface IPageTitle {
  title: string;
}

export interface ISearchState {
  searchValue: string;
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
