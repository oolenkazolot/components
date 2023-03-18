import { PageTitle } from '../components/PageTitle/PageTitle';
import { Header } from '../components/Header/Header';
const mainClass = 'main';
export const AboutPage: () => JSX.Element = () => {
  return (
    <>
      <Header title="About us" />
      <main className={mainClass}>
        <PageTitle title="About us" />
      </main>
    </>
  );
};
