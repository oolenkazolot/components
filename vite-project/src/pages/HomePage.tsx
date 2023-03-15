import { PageTitle } from '../components/PageTitle/PageTitle';
import { Search } from '../components/Search/Search';

export const HomePage: Function = () => {
  return (
    <div>
      <PageTitle title="Home page" />
      <Search />
    </div>
  );
};
