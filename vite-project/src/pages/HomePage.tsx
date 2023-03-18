import { PageTitle } from '../components/PageTitle/PageTitle';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
import { Header } from '../components/Header/Header';
const mainClass = 'main';
export const HomePage: () => JSX.Element = () => {
  return (
    <>
      <Header title="Home page" />
      <main className={mainClass}>
        <PageTitle title="Home page" />
        <Search />
        <Products />
      </main>
    </>
  );
};
