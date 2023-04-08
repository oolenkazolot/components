import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IPageTitle {
  title: string;
}

export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export interface IFormValue {
  inputText: string;
  inputDate: string;
  select: string;
  inputCheckbox: string;
  radioGroup: string;
  inputFile: FileList;
}

export interface ICardForm {
  inputText: string;
  inputDate: string;
  select: string;
  inputCheckbox: string;
  radioGroup: string;
  image: string;
}

export interface IButton {
  className?: string;
  content?: string | JSX.Element;
  attributes: Record<string, string | boolean>;
}

export interface IInput {
  className?: string;
  content?: string;
  register: UseFormRegisterReturn<string>;
  attributes: Record<string, string | boolean>;

  error: FieldError | undefined;
}

export interface IInputCheckbox {
  className?: string;
  content?: string;
  register: UseFormRegisterReturn<string>;
  attributes: Record<string, string | boolean>;
  error: FieldError | undefined;
}

export interface IMessage {
  message: string | undefined;
  error: boolean;
}

export interface IRadioGroup {
  className?: string;
  content: string[];
  values: string[];
  register: UseFormRegisterReturn<string>;
  attributes?: Record<string, string | boolean>;
  error: FieldError | undefined;
}

export interface ISelect {
  options: string[];
  defaultOption: string;
  content: string;
  register: UseFormRegisterReturn<string>;
  error: FieldError | undefined;
}

export interface IModal {
  className?: string;
  children: JSX.Element;
  onCloseModal: () => void;
  classNameIcon: string;
  isOpen: boolean;
}
