import { useState } from 'react';
import './search.scss';
import '../../main.scss';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
const mainClass = 'search';

export const Search: () => JSX.Element = () => {
  const stateSearch = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>(stateSearch.search);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: 'search/change', payload: searchValue });
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
