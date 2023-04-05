import { useState } from 'react';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
const mainClass = 'main';
export const HomePage: () => JSX.Element = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <main className={mainClass}>
        <PageTitle title="Home page" />
        <Search setSearch={setSearch} />
        <Products search={search} />
      </main>
    </>
  );
};
