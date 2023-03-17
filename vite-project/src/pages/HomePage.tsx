import { PageTitle } from '../components/PageTitle/PageTitle';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';
import { Header } from '../components/Header/Header';
const mainClass: string = 'main';
export const HomePage: Function = () => {
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
