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

export interface ICardFormValues {
  name?: string;
  date?: string;
  addNotifications?: boolean;
  notNotifications?: boolean;
  dataPersonal?: boolean;
  country?: string;
  picture?: string | 0 | undefined;
}

export interface IStateForm {
  userInfos: ICardFormValues[];
  isSave: boolean;
  dataValidateFields: IValidateForm;
}

export interface IButton {
  className?: string;
  content?: string;
  attributes: Record<string, string | boolean>;
}

export interface IInput {
  className?: string;
  content?: string;
  refInput: React.RefObject<HTMLInputElement>;
  attributes: Record<string, string | boolean>;
  errorMessage: string;
  isError: boolean;
}

export interface IInputCheckbox {
  className?: string;
  content?: string;
  refInput: React.RefObject<HTMLInputElement>;
  attributes: Record<string, string | boolean>;
  errorMessage: string;
  isError: boolean;
}

export interface IMessage {
  message: string;
  isError: boolean;
}

export interface IRadioGroup {
  className?: string;
  content: string[];
  values: string[];
  refInput: React.RefObject<HTMLInputElement>[];
  attributes: Record<string, string | boolean>;
  errorMessage: string;
  isError: boolean;
}

export interface IValidateForm {
  inputText?: boolean;
  inputDate?: boolean;
  inputRadio?: boolean;
  inputCheckbox?: boolean;
  select?: boolean;
  inputFile?: boolean;
}

export interface ISelect {
  options: string[];
  defaultOption: string;
  name: string;
  content: string;
  refSelect: React.RefObject<HTMLSelectElement>;
  errorMessage: string;
  isError: boolean;
}
