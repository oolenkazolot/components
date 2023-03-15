import { PageTitle } from '../components/PageTitle/PageTitle';
import { Products } from '../components/Products/Products';
import { Search } from '../components/Search/Search';

export const HomePage: Function = () => {
  return (
    <div>
      <PageTitle title="Home page" />
      <Search />
      <Products />
    </div>
  );
};
