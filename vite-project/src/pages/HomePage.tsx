import { useState } from 'react';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Cards } from '../components/Cards/Cards';
import { Search } from '../components/Search/Search';
const mainClass = 'main';
export const HomePage: () => JSX.Element = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <main className={mainClass}>
        <PageTitle title="Home page" />
        <Search setSearch={setSearch} />
        <Cards search={search} />
      </main>
    </>
  );
};
