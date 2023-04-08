import { useState } from 'react';
import './search.scss';
import '../../main.scss';
import { ISearch } from '../../models';
const mainClass = 'search';

export const Search: (props: ISearch) => JSX.Element = ({ setSearch }: ISearch) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', searchValue);
    setSearch(searchValue);
  };

  return (
    <section className={mainClass}>
      <h2 className={`${mainClass}__title`}>Search Characters</h2>
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
