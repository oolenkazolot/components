import { PageTitle } from '../components/PageTitle/PageTitle';
import { Header } from '../components/Header/Header';
const mainClass: string = 'main';
export const AboutPage: Function = () => {
  return (
    <>
      <Header title="About us" />
      <main className={mainClass}>
        <PageTitle title="About us" />
      </main>
    </>
  );
};
