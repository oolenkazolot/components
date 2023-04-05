import { useState } from 'react';
import './search.scss';
import '../../main.scss';
const mainClass = 'search';

interface ISearch {
  setSearch: (value: string) => void;
}

export const Search: (props: ISearch) => JSX.Element = ({ setSearch }: ISearch) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', searchValue);
    setSearch(searchValue);
  };

  return (
    <section className={mainClass}>
      <form className={`${mainClass}__form`} onSubmit={onSubmit}>
        <i className={`${mainClass}__icon icon-search`}></i>
        <input
          className={`${mainClass}__input`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search text..."
        />
      </form>
    </section>
  );
};
