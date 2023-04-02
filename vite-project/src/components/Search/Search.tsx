import { useState, useEffect, useRef } from 'react';
import './search.scss';
import '../../main.scss';
const mainClass = 'search';

export const Search: () => JSX.Element = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const current = inputRef.current;

    return () => {
      localStorage.setItem('searchValue', current!.value);
    };
  }, []);

  return (
    <section className={mainClass}>
      <i className={`${mainClass}__icon icon-search`}></i>
      <input
        className={`${mainClass}__input`}
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search text..."
      />
    </section>
  );
};
