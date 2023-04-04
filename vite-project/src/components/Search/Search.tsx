import { useEffect, useRef } from 'react';
import './search.scss';
import '../../main.scss';
const mainClass = 'search';

interface ISearch {
  setSearch: (value: string) => void;
  search: string;
}

export const Search: (props: ISearch) => JSX.Element = ({ setSearch, search }: ISearch) => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const current = inputRef.current;

    return () => {
      localStorage.setItem('searchValue', current!.value);
    };
  }, []);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearch(search);
  };

  return (
    <section className={mainClass}>
      <form className={`${mainClass}__form`} onSubmit={onSubmit}>
        <i className={`${mainClass}__icon icon-search`}></i>
        <input
          className={`${mainClass}__input`}
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search text..."
        />
      </form>
    </section>
  );
};
